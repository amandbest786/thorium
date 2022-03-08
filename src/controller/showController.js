const userModel = require("../models/userModel");
require("../controller/createController");
var jwt = require('jsonwebtoken');

const showAllUsers = async function(req, res){
    let userData = await userModel.find()
    res.send({ msg : userData});
}

const getUser = async function(req, res){
    let param = req.params.user_Id
    let userData = await userModel.findById(param)
    if (!userData){
        return res.send({msg : "no user is present with this user Id"})
    }
    res.send({msg : userData})
}

module.exports.showAllUsers = showAllUsers;
module.exports.getUser = getUser;