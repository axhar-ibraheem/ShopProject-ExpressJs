const express = require("express");
const router  = express.Router();
const contactController = require('../controllers/contact.controller');

router.get('/contactus', contactController.getContactForm);


module.exports = router;