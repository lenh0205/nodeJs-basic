const mongoose = require("mongoose");
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;

const Course = new Schema({
  name: { type: String, required: true },
  description: String,
  image: { type: String, maxLength: 600 },
  videoId: { type: String },
  level: { type: String },
  slug: { type: String, slug: 'name', unique: true }
}, {
  timestamps: true
});

// Add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { 
  deleteAt: true,
  overrideMethods: 'all' 
})

module.exports = mongoose.model('Course', Course);
// từ model name 'Course' nó sẽ tự suy ra Collection của ta là "courses"
// Nếu ta tạo Model cho 1 Collection chưa có trong DB, thì nó sẽ tự tạo