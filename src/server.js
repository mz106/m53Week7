const express = require("express");

const app = express();

// http://localhost:5001/davelikescars
app.use("/example", express.static("example"));
app.use("/pizza", express.static("motorbikes"));

app.listen(5001, () => {
  console.log("Server is listening on port 5001");
});
