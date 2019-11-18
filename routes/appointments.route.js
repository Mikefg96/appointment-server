const express = require('express'),
    controller = require('../controllers/appointments.controller');

const router = express.Router();

router.post('/create', controller.createAppointment);
router.get('/', controller.getAppointments);
router.get('/delete/:appointment_id', controller.deleteAppointment);

module.exports = router;
