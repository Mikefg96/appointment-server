const Appointment = require('../models/appointments.model');

exports.createAppointment = async(req, res) =>  {

    const formattedDate = new Date(req.body.date);

    const newAppointment = new Appointment({
        name: req.body.name,
        lastName: req.body.lastName,
        date: formattedDate,
        service_id: req.body.service_id
    });

    try {
        let newObj = await newAppointment.save();
        res.status(200).json({
            err: false,
            message: "Success!",
            obj: newObj
        });
    } catch(e) {
        res.status(500).json({
            err: true,
            message: e,
            obj: null
        });
    }
}

exports.getAppointments = async(req, res) => {

    Appointment.find({}).populate('service_id').exec((err, appointments) => {
        if(err) {
            res.status(500).json({
                err: true,
                message: err,
                obj: null
            });  
        } else {
            res.status(200).json({
                err: false,
                message: "Success!",
                data: appointments
            });
        }
    });
}

exports.deleteAppointment = async(req, res) => {
    const appointment_id = req.params.appointment_id;
    Appointment.findByIdAndDelete(appointment_id, (err, appointment) => {
        if(err) {
            res.status(500).json({
                err: true,
                message: err,
                obj: null
            });  
        } else {
            res.status(200).json({
                err: false,
                message: "Success!",
                data: appointment
            });
        }
    });
}