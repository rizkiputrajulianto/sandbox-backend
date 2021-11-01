var express = require('express');
var router = express.Router();
const routerTransaksi = require("../controllers/transaksi/router");
const routerUsers = require("../controllers/users/routes");
const routerBooks = require("../controllers/books/routes");

router.use("/transactions", routerTransaksi);
router.use("/user", routerUsers);
router.use("/book", routerBooks);


module.exports = router;
