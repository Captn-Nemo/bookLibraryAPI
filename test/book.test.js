const request = require("supertest")("http://localhost:3000/api");
const expect = require("chai").expect;

// describe("POST /insert", function() {
//   it("Insert a Book into the db", async function() {
//     const response = await request.post("/insert").send({
//       name: "Book 1",
//       author: "Sajith SR 2",
//       published_date: "2021-04-17",
//       price: "100",
//       quantity: "75"
//     });

//     expect(response.status).to.eql(200);
//     expect(response.body.statusCode).to.eql(200);
//   });
// });

describe("POST /insert", function() {
  it("Returns 400 Bad Requst If the Book Name is already  preset in db", async function() {
    const response = await request.post("/insert").send({
      name: "Book 1",
      author: "Sajith SR 2",
      published_date: "2021-04-17",
      price: "100",
      quantity: "75"
    });
    expect(response.status).to.eql(400);
    expect(response.body.statusCode).to.eql(400);
  });
});

describe("GET /getallbooks", function() {
  it("returns all Book data", async () => {
    const response = await request.get("/getallbooks");
    expect(response.status).to.eql(200);
    expect(response.body).length.to.gt(0);
    expect(response.body).a("array");
  });
});

// describe("GET /getallbooks", function() {
//   it("returns all Book data", async () => {
//     const response = await request.get("/getallbooks");
//     expect(response.body.statusCode).to.eq(404);
//     expect(400);
//   });
// });

describe("GET /getbookdetails/:id", function() {
  var _id = "602c0b2a60b55e388c91e53f";
  it("Returns The Book Detials by the id", async () => {
    const response = await request.get("/getbookdetails/" + _id);
    expect(response.body).to.include.keys(
      "name",
      "author",
      "published_date",
      "price",
      "quantity",
      "_id"
    );
    expect(200);
  });
});

describe("GET /getbookdetails/:id", function() {
  var _id = "602a1577b339362e7cdf962";
  it("Returns 404 Not Found Error if No Books are Found for the id", async () => {
    const response = await request.get("/getbookdetails/" + _id);
    expect(response.body.statusCode).to.eq(404);
    expect(404);
  });
});

describe("PUT /update/:id", function() {
  var _id = "602a177b339362e7cdf962";
  it("Returns 404 Not Found Error if No Books are Found for the id", async () => {
    const response = await request.put("/update/" + _id);
    expect(response.body.statusCode).to.eq(404);
    expect(404);
  });
});

describe("PUT /update/:id", function() {
  var _id = "602c0b2a60b55e388c91e53f";
  it("Returns 400 Bad Request if name and author present in request", async () => {
    const response = await request.put("/update/" + _id).send({
      name: "Book 1",
      author: "Sajith SR 2",
      published_date: "2021-04-17",
      price: "100",
      quantity: "75"
    });
    expect(response.body.statusCode).to.eq(400);
    expect(400);
  });
});

describe("PUT /update/:id", function() {
  var _id = "602c0b2a60b55e388c91e53f";
  it("Returns Success Message On Successful book updation", async () => {
    const response = await request.put("/update/" + _id).send({
      published_date: "2021-04-17",
      price: "100",
      quantity: "75"
    });
    expect(response.body.statusCode).to.eq(200);
    expect(200);
  });
});

describe("DELETE /delete/:id", function() {
  var _id = "602c0b2a60b55e388c91e53d";
  it("Returns 404 Not Found Error if No Books are Found for the id", async () => {
    const response = await request.delete("/delete/" + _id);
    expect(response.body.statusCode).to.eq(404);
    expect(404);
  });
});

describe("DELETE /delete/:id", function() {
  var _id = "602c0b2a60b55e388c91e53g";
  it("Returns 400 For wrong id format", async () => {
    const response = await request.delete("/delete/" + _id);
    expect(400);
  });
});

// describe("DELETE /delete/:id", function() {
//   var _id = "602c0b2a60b55e388c91e53f";
//   it("Returns Success Message On Successful book Deletion", async () => {
//     const response = await request.delete("/delete/" + _id);
//     expect(response.body.statusCode).to.eq(200);
//     expect(200);
//   });
// });
