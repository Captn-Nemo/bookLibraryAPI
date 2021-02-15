var mongoose = require("mongoose");
// This would make mongoose use native Promises
mongoose.Promise = global.Promise;

// This environment property is used for getting the URI for MongoDB
// 'mongodb://<user>:<password>@ds163387.mlab.com:63387/acme123'
var uri = "mongodb://localhost:27017/Mylibrary";

// No need to provid ethe user /password separately its part of the URI
// var options = {user:process.env.DB_USER, pass:process.env.DB_PASSWORD}

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// Setup event listeners for the mongoose connections
mongoose.connection.on("error", function(err) {
  console.log("Mongoose connection error");
  console.log(err);
});
// events
mongoose.connection.on("disconnected", function() {
  console.log("Mongoose disconnected");
});
mongoose.connection.on("open", function() {
  console.log("Mongoose connected");
});

exports.mongoose = mongoose;
exports.db = mongoose.connection;
