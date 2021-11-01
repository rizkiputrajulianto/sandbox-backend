const express = require("express");
const router = express.Router();
const createBooks = require("./create.booksController");
const getBooks = require("./get.booksController");
const getType = require("./get.booksTypeController");
const putBooks = require("./put.books.Controller");
const delBooks = require("./delete.booksController");
const validator = require("../../helpers/validator");

router.post('/',createBooks.validation, validator, createBooks.service);
router.get('/', getBooks.service);
router.get('/:id', getBooks.service);
router.get('/type', getType.service);
router.get('/type/:id', getType.service);
router.put('/:id',putBooks.validation, validator, putBooks.service);
router.delete('/:id', delBooks.service);

module.exports = router;