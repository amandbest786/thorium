const express = require('express');
const router = express.Router();
const book = require("../controller/controller.js")

router.post('/giveData', book.giveBookData);

router.get('/getData', book.getBookData);

module.exports = router;
