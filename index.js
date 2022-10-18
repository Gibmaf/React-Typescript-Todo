const express = require("express");

const app = express();

const port = 3200;

app.get("/", (req, res) => {
  res.send("Express + Typescript Server");
});

app.listen(port);
