const Book = require("./model");

const addBook = async (request, response) => {
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
};

module.exports = {
  addBook: addBook,
};
