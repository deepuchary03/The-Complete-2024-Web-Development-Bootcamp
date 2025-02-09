import express from "express";
const app = express();
const port = 3000;
app.get("/", (req, res) => {
  const data = {
    name: "deepu",
    college: "TKREC",
    time: "11am",
  };
  res.render("i.ejs", data);
});
app.listen(port), () => {};
