const userModel = require("../models/userModel");

const deleteUser = async function(req, res){
    let param = req.params.user_Id
    let userData = await userModel.findById(param)
    if (!userData){
        return res.send({msg : "no user is present with this user Id"})
    }
    let deletedUser = await userModel.findOneAndUpdate(
        { _id: param },
        { $set: { isDeleted: true} },
        { $new: true }
    )
    res.send({ msg : deletedUser});
}

module.exports.deleteUser = deleteUser;