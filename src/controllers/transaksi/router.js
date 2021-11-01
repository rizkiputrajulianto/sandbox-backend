const express = require("express");
const router = express.Router();
const createTransaction = require("./create.transactionControllers");
const validator = require("../../helpers/validator");

router.post('/',createTransaction.validation, validator, createTransaction.service);

module.exports = router;

