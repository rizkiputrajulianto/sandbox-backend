const {Users} = require("../../models");

const service = async function(req, res, next){
    try{
        const requestDB = await Users.findAll();
        return res.json({msg:"data berhasil diterima", data: requestDB});
    } catch (error) {
        return res.status(500).json({msg:error.toString()});
    }
}

module.exports = {service};