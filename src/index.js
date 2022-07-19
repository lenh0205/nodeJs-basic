const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, "public")));

// Đây là Middleware xử lý dữ liệu submit lên từ cái form HTML
app.use(express.urlencoded({ 
  extended: true 
}));
// Gửi dữ liệu từ Client lên Server = cách s/d code Js hoặc thư viện Js (XMLHttpRequest, fetch, axios, Ajax) để submit
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
); // định nghĩa handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));
// console.log(__dirname, path.join(__dirname, 'resources/views))

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  res.render("news");
});

app.get("/search", (req, res) => {
  res.render("search");
});
app.post("/search", (req, res) => {
  console.log(req.body); // Để lấy Form Data
  res.send("");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
