const path = require("path");
const express = require("express");
const morgan = require("morgan");
const methodOverride = require('method-override')
const { engine } = require("express-handlebars");

const sortMiddleware = require('./app/middlewares/sortMiddleware')

const app = express();
const port = 3000;

const route = require("./routes");
const db = require('./config/db')

// Connnect to DB
db.connect();

app.use(express.static(path.join(__dirname, "public")));

// Đây là Middleware xử lý dữ liệu submit lên từ cái form HTML
app.use(
  express.urlencoded({
    extended: true,
  })
);
// Gửi dữ liệu từ Client lên Server = cách s/d code Js hoặc thư viện Js (XMLHttpRequest, fetch, axios, Ajax) để submit
app.use(express.json());

app.use(methodOverride('_method'))

// Custom Middleware
app.use(sortMiddleware)

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: require('./helpers/handlebars')
  })
); // định nghĩa handlebars
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, 'resources','views'));
// console.log(__dirname, path.join(__dirname, 'resources/views))

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
