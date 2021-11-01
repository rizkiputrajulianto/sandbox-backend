const {typeBooks} = require("../../models");

const service = async function(req, res, next) {
    try {
        const where = {};
        if (req.params.id) {
            where.id = req.params.id
        }
        const requestDB = await typeBooks.findAll({where});
        if (!req.params.id) {
        return res.json({msg:"data tipe buku berhasil diterima", data: requestDB});
        } else {
            if(requestDB.length<1){
                return res.status(404).json({msg:"data tipe buku tidak dapat ditemukan"});
            } else {
                return res.json(requestDB[0]);
            }
        }
    } catch (error) {
        return res.status(500).json({msg: error.toString});
    }
}

module.exports = {service}