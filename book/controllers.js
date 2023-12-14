const Book = require("./model");

const addBook = async (request, response) => {
  try {
    const book = await Book.create({
      title: request.body.title,
      author: request.body.author,
      genre: request.body.genre,
    });

    const successResponse = {
      message: "book added",
      book: book,
    };

    response.status(201).json({ message: "book added", book: book });
  } catch (error) {
    const failureResponse = {
      message: "error has landed",
      error: error,
    };
    response
      .status(500)
      .json({ message: "the error has landed", error: error });
  }
};

const getAllBooks = async (request, response) => {
  const books = await Book.find({});
  const successResponse = {
    message: "book found",
    books: books,
  };

  response.send(successResponse);
};

module.exports = {
  addBook: addBook,
  getAllBooks: getAllBooks,
};
