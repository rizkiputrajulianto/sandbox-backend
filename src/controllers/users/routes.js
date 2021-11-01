const express = require("express");
const router = express.Router();
const createUsers = require("./create.usersController");
const getUsers = require("./get.usersController");
const deleteUsers = require("./delete.usersController");
const updateUsers = require("./update.usersController");

router.post('/', createUsers.service);
router.get('/', getUsers.service);
router.delete('/:id', deleteUsers.service);
router.put('/:id', updateUsers.service);

module.exports = router;

