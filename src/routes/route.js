const express = require('express');
var jwt = require('jsonwebtoken');
const router = express.Router();
const create = require("../controller/createController.js");
const show = require("../controller/showController.js");
const put = require("../controller/putController.js");
const deleteUser = require("../controller/deleteController.js");

let validateHeader = async function(req, res, next){
    let token = req.headers['x-auth-token']
    if (!token) {
        return res.send({ msg: "token must be present" });
    }
    let decodedToken = jwt.verify(token, "functionup-thorium");
    if (!decodedToken){
     return res.send({msg: "token is invalid" });
    }
    next()
}

router.post('/users', create.createUser);

router.post('/login', create.login);

router.get('/getUser/:user_Id',validateHeader, show.getUser);

router.get('/showAllUsers', show.showAllUsers);

router.put('/editUser/:user_Id',validateHeader, put.editUser);

router.delete('/deleteUser/:user_Id',validateHeader, deleteUser.deleteUser);

module.exports = router;
