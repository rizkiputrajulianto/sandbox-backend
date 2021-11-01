const {Books} = require("../../models");

const service = async function(req, res, next) {
    try{
        const payload = req.body;
        const where = {id: payload.id};
        const requestDB = await Books.update(payload, {where});
        if (requestDB[0]) {
            return res.json({msg:"data buku berhasil di update", data: payload});
        } else{
            return res.status(404).json({msg: "data buku gagal di update"});
        }
    }catch(error){
        return res.status(500).json({msg:error.toString});
    }
}

module.exports = {service}