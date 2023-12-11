const express = require("express");

const app = express();

app.use(express.json());

app.get("/book", (request, response) => {
  response.send({ title: "LotR", author: "tolkein" });
});

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
