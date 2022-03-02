const bookModel = require("../models/bookModel.js");
const publisherModel = require("../models/publisherModel");
const authorModel = require("../models/authorModel");

const createAuthor = async function(req, res){
    let authorData = req.body
    let saveauthorData =  await authorModel.create(authorData);
    res.send({ msg : saveauthorData});
}

const showAuthor = async function(req, res){
    let authorData = await authorModel.find()
    res.send({ msg : authorData});
}

const createPublisher = async function(req, res){
    let publisherData = req.body
    let savepublisherData =  await publisherModel.create(publisherData);
    res.send({ msg : savepublisherData});
}

const showPublisher = async function(req, res){
    let publisherData = await publisherModel.find()
    res.send({ msg : publisherData});
}

const createBook = async function(req, res){
    let bookData = req.body
    let authorData = await authorModel.find()
    let publisherData = await publisherModel.find()
    let authorID = req.body.author
    let publisherID = req.body.publisher
    let flag1 = 0;
    let flag2 = 0;
    if (!bookData.author) res.send("please provide author_id")
    else {
        for (let i=0; i<authorData.length; i++){
        if (authorData[i]._id == authorID)
        flag1 = 1;
        }
        if (flag1 == 0) res.send ({msg : "author is not present"})
    }
    if (!bookData.publisher) res.send("please provide publisher_id")
    else{
        for (let j=0; j<publisherData.length; j++){
        if (publisherData[j]._id == publisherID)
        flag2 = 1;
        }
        if (flag2 == 0) res.send ({msg : "publisher is not present"})
    }
    let savebookData =  await bookModel.create(bookData);
    res.send ({msg : savebookData})
}

const showBook = async function(req, res){
    let bookData = await bookModel.find()
    res.send({ msg : bookData});
}

const showBookUsingPopulate = async function(req, res){
    let bookData = await bookModel.find().populate('author').populate('publisher')
    res.send({ msg : bookData});
}

module.exports.createBook = createBook;
module.exports.createAuthor = createAuthor;
module.exports.showBook = showBook;
module.exports.createPublisher = createPublisher;
module.exports.showAuthor = showAuthor;
module.exports.showPublisher = showPublisher;
module.exports.showBookUsingPopulate = showBookUsingPopulate;