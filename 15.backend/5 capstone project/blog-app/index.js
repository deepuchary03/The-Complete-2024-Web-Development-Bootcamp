import express from "express";
import bodyParser from "body-parser";
import postsRouter from "./routes/posts.js"; // Note the .js extension

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use("/", postsRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
