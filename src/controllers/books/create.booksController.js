const {Books} = require("../../models");

const service = async function(req, res, next) {
    const payload = req.body;
    try {
        const requestDB = await Books.create(payload);
        return res.json({msg:"Data Berhasil Disimpan", data:requestDB});
    } catch (error) {
        return res.status(500).json({msg:error.toString()});
    }
};

module.exports = {service};