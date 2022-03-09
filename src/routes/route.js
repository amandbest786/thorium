const express = require('express');
var jwt = require('jsonwebtoken');
const router = express.Router();
const create = require("../controller/createController.js");
const show = require("../controller/showController.js");
const put = require("../controller/putController.js");
const deleteUser = require("../controller/deleteController.js");

let authentication = async function(req, res, next){
    try{
        let token = req.headers['x-auth-token']
        if (!token) {
            return res.send({ msg: "token must be present" });
        }
        let decodedToken = jwt.verify(token, "functionup-thorium");
        next()
    }
    catch(error){res.send({msg : "token is invalid"})}
}

let authorization = async function(req, res, next){
    let token = req.headers['x-auth-token'] 
    let decodedToken = jwt.verify(token, "functionup-thorium");
    let usedLoggedIn = decodedToken.userId
    let param_Id = req.params.user_Id
    if (usedLoggedIn !== param_Id) return res.send("You are not autherised to access")
    next()
}

router.post('/users', create.createUser);

router.post('/login', create.login);

router.get('/getUser/:user_Id',authentication,authorization, show.getUser);

router.get('/showAllUsers', show.showAllUsers);

router.put('/editUser/:user_Id',authentication,authorization, put.editUser);

router.delete('/deleteUser/:user_Id',authentication,authorization, deleteUser.deleteUser);

module.exports = router;
