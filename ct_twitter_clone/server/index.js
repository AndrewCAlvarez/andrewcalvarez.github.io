const express = require("express");
const cors = require("cors");
const monk = require("monk");
const Filter = require("bad-words"); //filters out bad words
const rateLimit = require("express-rate-limit"); //limits number of mews

const app = express();

const db = monk("localhost/meower"); //connect to mongodb db on my local machine to a db called "meower"
const mews = db.get("mews"); //gets the db, and creates it if it doesn't exist
/*Mongo works by having a collection of arrays */
const filter = new Filter();

app.use(cors()); //this adds cors as middleware. Any incoming reqs will pass thru cors, and it will automatically add the cors headers to avoid the cors error
app.use(express.json()); //body parser middleware. Any inc reqs that has a "content-type" or "applicaiton/json" will be parse by this middleware and then put on the body

//.get is used to give a response
app.get("/", (req, res) => {
    res.json({
        message: "Meower! 🍿 "
    });
});

app.get("/mews", (req, res) => {
    //this GET request gets all the mews in the array and responds with them
    mews.find().then(mews => {
        res.json(mews);
    });
});

function isValidMew(mew) {
    //take the name and content, turn it into a string, and trim all whitespace to see if the string is ONLY whitespace (invalid).
    return (
        mew.name &&
        mew.name.toString().trim() !== "" &&
        mew.content &&
        mew.content.toString().trim() !== ""
    );
}

//we had to move the rate limit here before it gets invoked after the request for the mews.
app.use(
    rateLimit({
        windowMs: 10 * 1000, // 15 minutes
        max: 1 // limit each IP to 100 requests per windowMs
    })
);

//.post
app.post("/mews", (req, res) => {
    //we want to validate what is coming in to avoid errors and hacks
    if (isValidMew(req.body)) {
        //insert in db
        const mew = {
            //make sure to turn these into strings. This avoids people sending in actual code to hack into your database
            name: filter.clean(req.body.name.toString()), //filter is a bad-words module
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };
        console.log(mew);

        //.insert passes the mew, and res.json responds with the newly created mew
        mews.insert(mew).then(createdMew => {
            res.json(createdMew);
        });
    } else {
        res.status(422);
        res.json({
            message: "Hey! Name and Content are required!"
        });
    }
});

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});
