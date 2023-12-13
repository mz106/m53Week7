const { Router } = require("express");
const bookRouter = Router();

const { addBook, getAllBooks } = require("./controllers");

bookRouter.post("/book", addBook);

bookRouter.get("/book", getAllBooks);

module.exports = bookRouter;
