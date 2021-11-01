const {Books} = require("../../models");

const service = async function(req, res, next) {
    try {
        const where = {id: req.body.id};
        const requestDB = await Books.destroy({where});
        if(requestDB){
            return res.json({msg: "data buku berhasil dihapus", data:requestDB})
        } else {
            return res.status(404).json({msg:"data buku gagal dihapus"});
        }
    } catch (error) {
        return res.status(500).json({msg:error.toString});
    }
}

module.exports = {service}