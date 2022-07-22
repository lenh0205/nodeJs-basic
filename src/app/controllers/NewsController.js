
class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('NEWS DETAIL')
    }
}

module.exports = new NewsController
// ta sẽ export ra 1 instance khởi tạo từ NewsController