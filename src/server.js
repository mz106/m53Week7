const express = require("express");

const app = express();

app.use(express.json());

const books = [];

const myArray = [];

app.post("/book", (request, response) => {
  books.push(request.body);

  const successResponse = {
    message: "book added",
    books: books,
  };

  response.send(successResponse);
});

app.get("/book", (request, response) => {
  const index = books.findIndex((book) => book.title === request.body.title);

  const successResponse = {
    message: "book found",
    book: books[index],
  };

  response.send(successResponse);
});

app.delete("/book");

app.put("/book");

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});

// if (HTTP === "GET") {
//   // do some get stuff
// } else if (HTTP === "POST") {
//   // do some post stuff
// }

// const response = await fetch("http://localhost:5001/book", {
//     method: "DELETE"
// });
