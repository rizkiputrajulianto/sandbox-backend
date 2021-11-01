const {Orders, Users, Books} = require("../../models");
const {body} = require("express-validator")

const service = async function(req, res, next) {
    try {
        const payload = req.body;
        const requestDB = await Orders.create(payload);
        return res.json({msg:"Data Berhasil Disimpan", data:requestDB});
    } catch (error) {
        return res.status(500).json({msg:error.toString()});
    }
};

const validation = [
    body().custom(async(value) =>{
        const data = value;
        if (data.usersId && data.booksId && data.qty) {
            const dataUsers = await Users.findOne({where : {id : data.usersId}});
            if (dataUsers) {
                const dataBooks = await Books.findOne({where:{id: data.booksId}});
                if (dataBooks) {
                    return true
                } else {
                    return Promise.reject("Data Buku tidak ditemukan");
                }
            } else {
                return Promise.reject("Data User tidak ditemukan");
            }
        } else {
            return Promise.reject("Tolong Masukan id User , id Buku, dan jumlah Buku");
        }
    })
]

module.exports = {service, validation};