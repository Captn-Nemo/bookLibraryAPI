/* 
  All the controller functions for the apis
*/

var model = require("../models/model.book");
// var db = require("../config/db.settings").db;

//create a book
exports.insert = (data, callback) => {
  new model.BookSchema(data).save((err, inserted) => {
    callback(err, inserted);
  });
};

//Get all Books from DB
exports.getallBooks = (criteria, callback) => {
  model.BookSchema.find({}, (err, data) => {
    callback(err, data);
  });
};

//Get Single Book from DB
exports.getBookDetails = (criteria, callback) => {
  model.BookSchema.findOne(criteria, (err, data) => {
    callback(err, data);
  });
};

//Update a Book in DB
exports.update = (criteria, data, callback) => {
  model.BookSchema.updateOne(criteria, data, (err, doc) => {
    callback(err, doc);
  });
};

//delete a book from db
exports.delete = (criteria, callback) => {
  model.BookSchema.deleteOne(criteria, (err, data) => {
    callback(err, data);
  });
};
