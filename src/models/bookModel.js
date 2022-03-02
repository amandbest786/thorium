const mongoose = require('mongoose'),
Schema = mongoose.Schema

const bookSchema = new mongoose.Schema({
    name: String,
    author:{
        type : Schema.Types.ObjectId,
        ref : 'NewAuthor',
        required : true
    },
    price: Number,
    ratings: Number,
    publisher: {
        type : Schema.Types.ObjectId,
        ref : 'NewPublisher',
        required : true
    }
}, {timestamps : true})

module.exports = mongoose.model('NewBook',bookSchema);
