const bookModel = require("../models/bookModel.js");

const giveBookData = async function(req, res){
    let bookData = req.body
    let save =  await bookModel.create(bookData);
    console.log('stored book data successfully');
    res.send({ "Book Data" : save})
}

const getBookData = async function(req, res){
    let bookList = await bookModel.find();
    console.log('Data sent successfully');
    res.send({"List of all books " : bookList})
}

module.exports.getBookData = getBookData;
module.exports.giveBookData = giveBookData;