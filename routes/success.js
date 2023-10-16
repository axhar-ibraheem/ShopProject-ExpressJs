const express = require('express');
const router = express.Router()
const successController = require('../controllers/contact.controller');

router.post('/success', successController.sumbitForm);

module.exports = router;