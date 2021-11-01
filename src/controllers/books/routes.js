const express = require("express");
const router = express.Router();


router.post('/', createUsers.service);
router.get('/', getUsers.service);
router.delete('/:id', deleteUsers.service);
router.put('/:id', updateUsers.service);

module.exports = router;