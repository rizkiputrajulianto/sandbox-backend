const {test} = require("../../models");

const service = async function(req, res, next) {
    const payload = req.body;
    try {
        const requestDB = await test.create(payload);
        return res.json({msg:"Data Berhasil Disimpan", data:payload});
    } catch (error) {
        return res.status(500).json({msg:error.toString()});
    }
};

module.exports = {service};