const userModel = require("../models/userModel");
const loginModel = require("../models/loginModel");
var jwt = require('jsonwebtoken');

const createUser = async function(req, res){
    let userData = req.body
    let save =  await userModel.create(userData);
    res.send({ msg : save});
}

const login = async function(req, res){
    let userData = req.body
    const userName = userData.email
    const password = userData.password
    let user = await userModel.findOne({ emailId: userName, password: password });
    if (!user)
      return res.send({
        status: false,
        msg: "username or the password is not corerct",
      });
    
      let token = jwt.sign(
        {
          userId: user._id.toString()
        },
        "functionup-thorium"
      );
      res.setHeader("x-auth-token", token);
      res.send({ status: true, data: token });
  };


module.exports.createUser = createUser;
module.exports.login = login;