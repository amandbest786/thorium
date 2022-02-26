const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName : {
        type : String,
        required : true,
        unique : true
    },
    authorName : {
        type : String,
        required : true
    },
    catagory : {
        type : String,
        enum : ['Fiction', 'Comic', 'Mystery', 'Fantasy', 'Horror', 'Biography', 'Research', 'Spiritual', 'Motivational']
    },
    year : Number
}, {timestamps : true})

module.exports = mongoose.model('bookdetails',bookSchema);