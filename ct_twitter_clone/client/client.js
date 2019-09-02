const form = document.querySelector("form");
const loadingElement = document.querySelector(".loading");
const API_URL = "http://localhost:5000/mews"; //a variable to store the address of the server that we are making requests to

loadingElement.style.display = "none";

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
            console.log("an");
        });
});
