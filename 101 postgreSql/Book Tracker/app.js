const express = require("express");
const app = express();
const { Pool } = require("pg");
const booksRouter = require("./routes/books");

// PostgreSQL Connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "5025",
  port: 5432, // Default PostgreSQL port
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// EJS View Engine
app.set("view engine", "ejs");

// Routes
app.use("/books", booksRouter(pool));

// Home Route
app.get("/", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM books ORDER BY read_date DESC"
    );
    res.render("index", { books: result.rows });
  } catch (err) {
    console.error(err);
    res.send("Error loading books");
  }
});

// Server Start
const PORT = 3000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
