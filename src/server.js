require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("../db/connection");

const port = process.env.PORT || 5001;

const app = express();

app.use(express.json());

connection();

// what do we want in our data? (of a book)

// title, author, genre - all strings

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  author: {
    type: String,
  },
  genre: {
    type: String,
  },
});

const Book = mongoose.model("Book", bookSchema);

// await Character.create({ name: 'Jean-Luc Picard' });

// add (or POST) a book to the db
app.post("/book", async (request, response) => {
  const book = await Book.create({
    title: request.body.title,
    author: request.body.author,
    genre: request.body.genre,
  });

  const successResponse = {
    message: "book added",
    book: book,
  };

  response.send(successResponse);
});

// get ALL books from the DB
app.get("/book", async (request, response) => {
  const books = await Book.find({});
  const successResponse = {
    message: "book found",
    books: books,
  };

  response.send(successResponse);
});

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

app.get("/movie", (request, response) => {
  const successResponse = {
    message: "hello from single movie",
  };

  response.send(successResponse);
});

app.get("/movie/allMovies", (request, response) => {
  const successResponse = {
    message: "hello from all of the movies",
  };

  response.send(successResponse);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// if (HTTP === "GET") {
//   // do some get stuff
// } else if (HTTP === "POST") {
//   // do some post stuff
// }

// const response = await fetch("http://localhost:5001/book", {
//     method: "DELETE"
// });
