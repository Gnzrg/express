const express = require("express");
const cors = require("cors");
const port = 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Hello Express Server",
    test: [
      { name: "Ganzorig", age: 21 },
      { name: "Ganzorig", age: 21 },
      { name: "Ganzorig", age: 21 },
    ],
  });
  app.get("/add", (req, res) => {
    const { a, b } = req.query;

    // console.log(a,b);
    let result = Number(a) + Number(b);
    res.json({ value: result });
  });
  app.get("/mul", (req, res) => {
    const { a, b } = req.query;
    let result = Number(a) * Number(b);
    res.json({ value: result });
  });
  app.get("/div", (req, res) => {
    const { a, b } = req.query;
    let result = Number(a) / Number(b);
    res.json({ value: result });
  });
  app.get("/min", (req, res) => {
    const { a, b } = req.query;
    let result = Number(a) - Number(b);
    res.json({ value: result });
  });
  console.log("Hello Express");
});
app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
