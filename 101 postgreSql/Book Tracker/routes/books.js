const express = require("express");
const router = express.Router();

module.exports = (pool) => {
  // Add a Book
  router.post("/add", async (req, res) => {
    const { title, author, rating, notes, read_date, cover_url } = req.body;
    try {
      await pool.query(
        "INSERT INTO books (title, author, rating, notes, read_date, cover_url) VALUES ($1, $2, $3, $4, $5, $6)",
        [title, author, rating, notes, read_date, cover_url]
      );
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.send("Error adding book");
    }
  });

  // Delete a Book
  router.post("/delete/:id", async (req, res) => {
    const { id } = req.params;
    try {
      await pool.query("DELETE FROM books WHERE id = $1", [id]);
      res.redirect("/");
    } catch (err) {
      console.error(err);
      res.send("Error deleting book");
    }
  });

  return router;
};
