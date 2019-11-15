const express = require('express'),
    controller = require('../controllers/services.controller');

const router = express.Router();

router.get('/', controller.loadServices);
router.post('/create', controller.createService);

module.exports = router;
