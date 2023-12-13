require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("../db/connection");

const Book = require("../book/model");

const bookRouter = require("../book/routes");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

connection();

app.use(bookRouter);

// get single book by title
app.get("/book/singleBook", async (request, response) => {
  const book = await Book.find({ title: request.params.title });
});

// delete a single book from the DB
app.delete("/book", (request, response) => {
  const index = books.findIndex((book) => book.title === request.body.title);

  // at position index, remove 1 element
  books.splice(index, 1);

  const successResponse = {
    message: "book deleted",
    books: books,
  };

  response.send(successResponse);
});

app.delete("/book/deleteAllBooks");

// update a single book's author
app.put("/book", async (request, response) => {
  const book = await Book.updateOne(
    {
      title: request.body.title,
    },
    {
      author: request.body.author,
    }
  );

  const successResponse = {
    message: "book updated",
    book: book,
  };

  response.send(successResponse);
});

app.put("/book/dynamicUpdate", async (request, response) => {
  const obj = {
    [request.body.dynamicKey]: request.body.dynamicValue,
  };

  console.log("the object: ", obj);

  const successResponse = {
    message: "We've got a dynamic object!",
    dynamicObj: obj,
  };

  response.send(obj);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
