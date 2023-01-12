import express from "express";

const app = express();

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.param.name}!`);
});
