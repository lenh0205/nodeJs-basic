const Course = require("../models/Course");
const { multipleMongooseToObject } = require('../../utils/mongoose')

class SiteController {
  // [GET] /
  index(req, res, next) {
    // đối số thứ 3 là next -> nhận err -> lọt vào 1 Middleware -> ta chỉ tập trung xử lý lỗi ở 1 nơi
    Course.find({})
      .then((courses) => {
        res.render("home", { 
            courses: multipleMongooseToObject(courses)
        });
        // đối số thứ 2 để truyền dữ liệu sang 'home'
      })
      .catch(next); // .catch(error => next(error))
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
