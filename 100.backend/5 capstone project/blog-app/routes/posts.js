import express from "express";

const router = express.Router();

let posts = [];

// GET home page
router.get("/", (req, res) => {
  res.render("index", { posts: posts });
});

// GET create post page
router.get("/create", (req, res) => {
  res.render("create");
});

// POST create post
router.post("/create", (req, res) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content,
    id: posts.length,
  };
  posts.push(newPost);
  res.redirect("/");
});

// GET edit post page
router.get("/edit/:id", (req, res) => {
  const post = posts[req.params.id];
  res.render("edit", { post: post, id: req.params.id });
});

// POST edit post
router.post("/edit/:id", (req, res) => {
  const postId = req.params.id;
  posts[postId] = {
    title: req.body.title,
    content: req.body.content,
    id: postId,
  };
  res.redirect("/");
});

// POST delete post
router.post("/delete/:id", (req, res) => {
  const postId = req.params.id;
  posts.splice(postId, 1);
  res.redirect("/");
});

export default router; // Use export default for ES modules
