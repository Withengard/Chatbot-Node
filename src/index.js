const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const trainBot = require("./trainBot");
const getAnswer = require("./getAnswer");

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Define your routes
app.get("/train-bot", trainBot);
app.post("/get-answer", getAnswer);

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});


//curl -X POST -H "Content-Type: application/json" -d "{\"question\": \"What is he doing since march 2022\"}" http://localhost:3000/get-answer
