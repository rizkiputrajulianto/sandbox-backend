const express = require("express");
const router = express.Router();
const createTransaction = require("./create.transactionControllers");

router.post('/', createTransaction.service);

module.exports = router;

