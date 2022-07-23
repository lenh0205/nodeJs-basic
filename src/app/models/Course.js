const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, maxLength: 255 },
  description: String,
  image: { type: String },
  createdAt: { type: Date, default: Date.now },
  UpdatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Course', Course);
// từ model name 'Course' nó sẽ tự suy ra Collection của ta là "courses"
// Nếu ta tạo Model cho 1 Collection chưa có trong DB, thì nó sẽ tự tạo