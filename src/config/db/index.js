const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/express_basic_dev'
            // ,{
            //     useNewUrlParser: true,
            //     useUnifiedTopology: true,
            //     useCreateIndex: true,
            // }
        );
        console.log('connect success')
    } catch (error) {
        console.log('connect fail')
    }
}

module.exports = { connect }