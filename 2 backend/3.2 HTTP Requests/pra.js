import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>");
});

app.get("/about", (req, res) => {
  res.send("this is about");
});

app.listen(port, () => {
  console.log("server running on http://localhost:" + port);
});
