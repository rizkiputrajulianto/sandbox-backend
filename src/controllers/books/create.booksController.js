const {Books, typeBooks} = require("../../models");
const {body} = require("express-validator")

const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const requestDB = await Books.create(payload);
        return res.json({msg:"Data Berhasil Disimpan", data:requestDB});
    } catch (error) {
        return res.status(500).json({msg:error.toString()});
    }
};

const validation = [
    body("typeBooksId").notEmpty().withMessage("tipe buku tidak boleh kosong").custom(async (value) => {
        const requestDB = await typeBooks.findOne({where:{id:value}});
        if (!requestDB) {
            return Promise.reject("Tipe Buku Tidak Dapat Ditemukan");
        } else {
            return true;
        }
    })
]

module.exports = {service, validation};