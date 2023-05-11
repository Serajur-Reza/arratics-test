const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { getItems } = require("./src/middlewares/items/getItems");
const { getSingleItem } = require("./src/middlewares/items/getSingleItem");
const { createItem } = require("./src/middlewares/items/createItem");
const { editItem } = require("./src/middlewares/items/editItem");
const { deleteItem } = require("./src/middlewares/items/deleteItem");

const { getUsers } = require("./src/middlewares/user/getUsers");
const { getSingleUser } = require("./src/middlewares/user/getSingleUser");
const { createUser } = require("./src/middlewares/user/createUser");
const { editUser } = require("./src/middlewares/user/editUser");
const { deleteUser } = require("./src/middlewares/user/deleteUser");

const app = express();

const port = 3000;

app.use(cors());
app.use(bodyParser.json());

const user = "dbUser";
const pass = "a120f";
let uri = `mongodb+srv://${user}:${pass}@cluster0-lu2mu.mongodb.net/test?retryWrites=true&w=majority`;

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(
      "Database cannot be connected due to this error: ",
      err.message
    );
  });

app.get("/item", getItems);
app.get("/item/:id", getSingleItem);
app.post("/item", createItem);
app.patch("/item/:id", editItem);
app.delete("/item/:id", deleteItem);

app.get("/user", getUsers);
app.get("/user/:id", getSingleUser);
app.post("/user", createUser);
app.patch("/user/:id", editUser);
app.delete("/user/:id", deleteUser);

// app.get("/", (req, res) => {
//   res.end("hello World");
//   console.log("hello World");
// });

app.listen(port, () => {
  console.log("listening in port 3000");
});
