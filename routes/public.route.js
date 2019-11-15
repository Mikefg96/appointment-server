const express = require('express');
    // controller = require('../controllers/services.controller');

const router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send('API funcionando');
    console.log('suh');
});

module.exports = router;
