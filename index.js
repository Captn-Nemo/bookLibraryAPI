var express = require("express");
var router = express.Router();
const { handleError } = require("./utils/errors");

require("./routes/book.routes")(router);

// Create the express app
app = express();

// Setup the body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Setup the app to use the router
app.use(router);

// Start the listener
app.listen(3000);
console.log("Listening on 3000");
