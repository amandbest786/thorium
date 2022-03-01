const bookModel = require("../models/bookModel.js");

const createBook = async function(req, res){
    let bookData = req.body
    let save =  await bookModel.create(bookData);
    console.log('stored book data successfully');
    res.send({ "Book Data" : save});
}

const bookList = async function(req ,res){
    let booksName = await bookModel.find().select({bookName : 1, authorName : 1, _id : 0});
    console.log('Data sent successfully');
    res.send({"List of books and authors " : booksName})
}

const getBooksInYear = async function(req, res){
    let bookYearData = req.query.year
    let bookYear = await bookModel.find({year : bookYearData});
    console.log('Data sent successfully');
    res.send({ "Book Data according to the year" : bookYear});
}

const getParticularBooks = async function(req, res){
    let finalList = await bookModel.find(req.body);
    console.log('Data sent successfully')
    res.send({ "List of books are" : finalList});
}

const getXINRBooks = async function(req ,res){
    let result = await bookModel.find({$or : [{'price.indianPrice' : "100INR"},{'price.indianPrice' : "200INR"},{'price.indianPrice' : "500INR"}]})
    console.log('Data sent successfully', result);
    res.send({"List of books " : result})
}

const getRandomBooks = async function(req ,res){
    let fixedBook = await bookModel.find({$or : [{totalPages : {$gt : 500}},{stockAvailable : true}]});
    console.log('Data sent successfully');
    res.send({"List of books " : fixedBook})
}

module.exports.createBook = createBook;
module.exports.bookList = bookList;
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks;
module.exports.getXINRBooks = getXINRBooks;
module.exports.getRandomBooks = getRandomBooks;
