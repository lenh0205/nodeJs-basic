const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.get('/:slug', newsController.show)
router.get("/", newsController.index);
// phải khớp /:slug trước rồi mới xuống "/"

module.exports = router;
