const mongoose = require("mongoose");
const slug = require("mongoose-slug-generator");
const mongooseDelete = require("mongoose-delete");
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const CourseSchema = new Schema(
  {
    _id: { type: Number },
    name: { type: String, required: true },
    description: String,
    image: { type: String, maxLength: 600 },
    videoId: { type: String },
    level: { type: String },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    _id: false, // Để mongoDB không can thiệp vào trường _id nữa
    timestamps: true,
  }
);

// Custom query helpers
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const isValidtype = ["asc", "desc"].includes(req.query.type);

    return this.sort({
      [req.query.column]: isValidtype ? req.query.type : "desc",
    });
  }
  return this
};

// Add plugin
mongoose.plugin(slug);

CourseSchema.plugin(AutoIncrement)
CourseSchema.plugin(mongooseDelete, {
  deleteAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model("Course", CourseSchema);
// từ model name 'Course' nó sẽ tự suy ra Collection của ta là "courses"
// Nếu ta tạo Model cho 1 Collection chưa có trong DB, thì nó sẽ tự tạo
