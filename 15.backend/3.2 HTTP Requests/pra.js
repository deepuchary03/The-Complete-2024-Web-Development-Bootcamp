import express from "express";
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  res.send("<h1>harry potter</h1>");
});
app.get("/signin", (req, res) => {
  res.send("<h1>user created</h1>");
});
app.listen(port, () => {
  console.log("http://localhost:8000");
});
