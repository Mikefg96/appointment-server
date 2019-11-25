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
    

class AppointmentClass {
    constructor() {

    }

    validateUserInput() {
        return this.name && this.lastName && this.date ? true : false;
    }

    validateDataTypes() {
        return typeof this.name === typeof "test string" && typeof this.lastName === typeof "test string" && typeof this.date === typeof "test string" ? true : false;
    }
}

appointmentSchema.loadClass(AppointmentClass);
module.exports = mongoose.model('appointment', appointmentSchema);