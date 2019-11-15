const express = require('express'),
    controller = require('../controllers/services.controller');

const router = express.Router();

router.post('/create', controller.createService);

module.exports = router;
