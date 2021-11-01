var express = require('express');
var router = express.Router();
const routerTest = require("../controllers/test/router");

router.use("/test", routerTest);


module.exports = router;
