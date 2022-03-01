const bookModel = require("../models/bookModel.js");
const authorModel = require("../models/authorModel.js");

const createBook = async function(req, res){
    let bookData = req.body
    let save1 =  await bookModel.create(bookData);
    console.log('stored book data successfully');
    res.send({ "Book Data" : save1});
}

const createAuthor = async function(req, res){
    let authorData = req.body
    let save2 =  await authorModel.create(authorData);
    console.log('stored author data successfully');
    res.send({"Author Data" : save2});
}

const bookByChetan = async function(req, res){
    let Chetan = await authorModel.find({authorName : "Chetan Bhagat"})
    let chetanId = Chetan[0].author_id
    let chetanBook = await bookModel.find({author_id : chetanId}).select({bookName : 1,_id : 0})
    console.log('stored author data successfully');
    res.send({"book Data" : chetanBook});
}

const twoStates = async function(req, res){
    let toostates = await bookModel.find({bookName : "2 states"})
    let name = toostates[0].bookName
    let updateedPrice = await bookModel.findOneAndUpdate({bookName : name},{$set : {price : 100}}).select({price : 1, _id :0})
    let id = toostates[0].author_id
    let author_Name = await authorModel.find({author_id : id}).select({authorName : 1, _id : 0})
    console.log('fetched author successfully');
    res.send({"author name" : author_Name, "updated price" : updateedPrice});
}   

const rangeBetween = async function(req, res){
    let range =  await bookModel.find({price : {$gte : 50, $lte : 100}})
    let id = range[0].author_id
    let authorname = await authorModel.find({author_id : id}).select({authorName : 1, _id : 0}) 
    console.log('fetched data successfully');
    res.send({ "author name" : authorname});
}

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.bookByChetan = bookByChetan;
module.exports.twoStates = twoStates;
module.exports.rangeBetween = rangeBetween;

