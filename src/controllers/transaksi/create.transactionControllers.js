const {Orders} = require("../../models");

const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const requestDB = await Orders.create(payload);
        return res.json({msg:"Data Berhasil Disimpan", data:requestDB});
    } catch (error) {
        return res.status(500).json({msg:error.toString()});
    }
};

module.exports = {service};