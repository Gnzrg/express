const express = require("express");
const cors = require("cors");
const port = 8000;
const app = express();
const json = require("body-parser");

let products = [
  { id: 1, productName: "shoes", category: "one" },
  { id: 2, productName: "bag", category: "two" },
  { id: 3, productName: "shirt", category: "three" },
];
app.use(cors());
app.use(json());
c;
app.get("/", (req, res) => {
  res.json();
});
