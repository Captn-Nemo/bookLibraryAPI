const db = require("../config/db.controller");
const httpCodes = { NOT_FOUND: 404, BAD_REQUEST: 400, SERVER_ERROR: 500 };
const {
  handleError,
  errorList,
  successList,
  handleSuccess
} = require("../utils/errors");
exports.getAllBooks = (req, res) => {
  var criteria = {};
  db.getallBooks(criteria, (err, docs) => {
    if (err) {
      res.send(err);
    } else {
      if (docs.length == 0) {
        handleError(errorList.NOT_FOUND, res);
      } else res.send(docs);
    }
  });
};

exports.getSingleBook = (req, res) => {
  db.getBookDetails({ _id: req.params.id }, (err, docs) => {
    if (docs == undefined) {
      handleError(errorList.NOT_FOUND, res);
    } else if (err) {
      handleError(errorList.SERVER_ERROR, res);
    } else {
      res.send(docs);
    }
  });
};

exports.insertBook = (req, res) => {
  var data = req.body;
  db.insert(data, (err, docs) => {
    if (err) {
      if (err.code == 11000) {
        handleError(errorList.DUPLICATE, res);
      } else {
        res.status(httpCodes.BAD_REQUEST);
        res.send(err);
      }
    } else {
      handleSuccess(successList.INSERTED, res);
    }
  });
};

exports.updateBook = (req, res) => {
  var data = req.body;
  if (req.body.name || req.body.author) {
    handleError(errorList.WRONG_UPDATE, res);
  } else {
    db.update({ _id: req.params.id }, data, (err, docs) => {
      if (docs == undefined) {
        handleError(errorList.NOT_FOUND, res);
      } else if (err) {
        handleError(errorList.SERVER_ERROR, res);
      } else {
        handleSuccess(successList.UPDATED, res);
      }
    });
  }
};

exports.deleteBook = (req, res) => {
  // var criteria = {};
  db.delete({ _id: req.params.id }, (err, docs) => {
    if (err) {
      res.status(httpCodes.BAD_REQUEST);
      res.send(err);
    } else {
      if (docs.deletedCount == 0) {
        handleError(errorList.NOT_FOUND, res);
      } else handleSuccess(successList.DELETED, res);
    }
  });
};
