const express = require('express');
const router = express.Router();
const book = require("../controller/controller.js");

router.post('/createBook', book.createBook);

router.get('/bookList', book.bookList);

router.get('/getBooksInYear', book.getBooksInYear);

router.post('/getParticularBooks', book.getParticularBooks);

router.get('/getXINRBooks', book.getXINRBooks);

router.get('/getRandomBooks', book.getRandomBooks);



module.exports = router;
