const express = require("express");
const router = express.Router();

const siteController = require("../app/controllers/SiteController");

router.get('/search', siteController.search)
router.get("/", siteController.index);
// phải khớp /:slug trước rồi mới xuống "/"

module.exports = router;
