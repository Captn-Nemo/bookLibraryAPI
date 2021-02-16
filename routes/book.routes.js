const bookController = require("../controller/book-controller");
const URI = "/api/";

module.exports = function(router) {
  //Get all Books
  router.get(URI + "getallbooks", bookController.getAllBooks);

  //Get the details of single Book by id
  router.get(URI + "getbookdetails/:id", bookController.getSingleBook);

  //Add a Book
  router.post(URI + "insert", bookController.insertBook);

  //Update an existing Book by id
  router.put(URI + "update/:id", bookController.updateBook);

  //Delete a existing Book by _id
  router.delete(URI + "delete/:id", bookController.deleteBook);
};
