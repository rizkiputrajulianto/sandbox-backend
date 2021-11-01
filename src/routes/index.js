var express = require('express');
var router = express.Router();
const routerTest = require("../controllers/test/router");
const routerUsers = require("../controllers/users/routes");
const routerBooks = require("../controllers/books/routes");

router.use("/test", routerTest);
router.use("/user", routerUsers);
router.use("/book", routerBooks);


module.exports = router;
