const express = require('express');
const router = express.Router();
const book = require("../controller/controller.js");

router.post('/createBook', book.createBook);

router.post('/createAuthor', book.createAuthor);

router.get('/bookByChetan', book.bookByChetan);

router.get('/twoStates', book.twoStates);

router.get('/rangeBetween', book.rangeBetween);

module.exports = router;