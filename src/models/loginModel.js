const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    "email" : String,
    "password" : String
}
, {timestamps : true})

module.exports = mongoose.model('loginDetailForJwt',loginSchema);