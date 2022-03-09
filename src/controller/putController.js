const userModel = require("../models/userModel");

const editUser = async function(req, res){
    let param = req.params.user_Id
    let userData = await userModel.findById(param)
    if (!userData){
        return res.send({msg : "no user is present with this user Id"})
    }
    let edit = await userModel.findOneAndUpdate(
        { _id: param },
        { $set: { age: 25} },
        { $new: true }
    )
    res.send({ msg : edit});
}

module.exports.editUser = editUser;