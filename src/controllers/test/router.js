const express = require("express");
const router = express.Router();
const createTest = require("./create.testControllers");
const validator = require("../../helpers/validator")

router.post('/', createTest.service);

module.exports = router;

//disini untuk alur / flow data yang masuk
/**
 * disini buat masukin validasi dsb.
 */