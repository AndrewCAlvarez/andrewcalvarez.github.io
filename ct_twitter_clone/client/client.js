const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const mewsElement = document.querySelector(".mews");
const API_URL = "http://localhost:5000/mews"; //a variable to store the address of the server that we are making requests to

loadingElement.style.display = "none";

listAllMews();

form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form); //we already have the form selected, now we use FormData() to get the data from the form.
    const name = formData.get("name");
    const content = formData.get("content"); //Use .get() and pass the name of the data, which was given a name in the name section of the form on html doc

    const mew = {
        name,
        content
    };
    form.style.display = "none";
    loadingElement.style.display = "";

    //we want to take our "mew" object and send POST it to our dynamic server
    //pass in the URL we are making this request against
    fetch(API_URL, {
        //Then we have to specify some options...
        //the method we want to use is POST
        //the body of the POST is the "mew" object
        method: "POST",
        body: JSON.stringify(mew), //JSON.stringify() takes "mew" and turns it into JSON
        headers: {
            //we need to specify with headers what exactly is being sent
            //We are saying that we are sending JSON, but we cannot forget to
            //turn the body into JSON
            "content-type": "application/json"
        }
        //!!NOTE!!You are likely to get a CORS error. Lookup for your specific situation
        //For this file we went to the server file and installed "npm i cors"
    })
        .then(response => response.json())
        .then(createdMew => {
            //This part gave me a lot of trouble. I didnt have mongodb running on mycomputer. To solve this be sure to have mongodb running alongside the server(s)
            form.reset();

            setTimeout(() => {
                form.style.display = "";
            }, 10000);
            listAllMews();
            loadingElement.style.display = "none";
        });
});

function listAllMews() {
    mewsElement.innerHTML = "";
    fetch(API_URL)
        //requests the all the mews in the array
        .then(response => response.json())
        .then(mews => {
            mews.reverse();
            mews.forEach(mew => {
                //returns mews in reverse order. Newest up top in this case
                //for every element in this array, I want to append it into the page
                //All of this code just adds it the html page itself
                const div = document.createElement("div");

                const header = document.createElement("h3");
                header.textContent = mew.name; //DO NOT USE .innerhtml!!!This can be abused easily by inserting actual html in the mew. Use textContent or innertext

                const contents = document.createElement("p");
                contents.textContent = mew.content;

                const date = document.createElement("small");
                date.textContent = new Date(mew.created);

                div.appendChild(header);
                div.appendChild(contents);
                div.appendChild(date);

                mewsElement.appendChild(div);
            });
        });
}
