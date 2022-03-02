const express = require('express');
const router = express.Router();
const book = require("../controller/controller.js");

router.post('/createBook', book.createBook);

router.post('/createAuthor', book.createAuthor);

router.post('/createPublisher', book.createPublisher);

router.get('/showAuthor', book.showAuthor);

router.get('/showBook', book.showBook);

router.get('/showPublisher', book.showPublisher);

router.get('/showBookUsingPopulate', book.showBookUsingPopulate);

module.exports = router;
