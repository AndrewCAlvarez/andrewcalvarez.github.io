//This whole program is a node.js application. Node.js is used for server-side
//code. We use all these other dependencies to give our node.js app more
//functionality, and to make it easier to write.

//require is how we bring in all of our dependencies
const express = require("express"); //adds express dependency
const cors = require("cors");
const morgan = require("morgan");
const bodyParser = require("body-parser");

//invoke express....you invoke a function. "invoke express" just means express().
//This is how you create an express app.
const app = express();

//this is how we add the morgan logger to the app. tiny is one option from morgan
app.use(morgan("tiny"));
