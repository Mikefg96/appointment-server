const mongoose = require('mongoose'),
    appointmentSchema = mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        lastName: {
            type: String,
            require: true
        },
        date: {
            type: Date,
            require: true
        },
        service_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'service',
            require: true
        }
    });
    
module.exports = mongoose.model('appointment', appointmentSchema);