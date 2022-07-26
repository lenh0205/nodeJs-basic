module.exports = {
    multipleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
        // Mongoose cung cấp Method toObject(); course từ Object constructor thành Object literal
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose
    }
}
// ta sẽ cần 2 hàm tương ứng với 2 trường hợp:
// 1. trả về 1 list dữ liệu
// 2. chỉ trả về 1 document