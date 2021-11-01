const express = require("express");
const router = express.Router();
const postUsers = require("./create.usersController");
const getUsers = require("./get.usersController");
const deleteUsers = require("./delete.usersController");
const updateUsers = require("./update.usersController");

router.post('/', postUsers.service);
router.get('/', getUsers.service);
router.get('/:id', getUsers.service)
router.delete('/:id', deleteUsers.service);
router.put('/:id', updateUsers.service);

module.exports = router;

