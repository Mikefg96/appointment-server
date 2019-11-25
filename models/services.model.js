const mongoose = require('mongoose'),
    serviceSchema = mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        }
    });
    
class ServiceClass {
    constructor() {

    }

    validateUserInput() {
        return this.name && this.price ? true : false;
    }
}

serviceSchema.loadClass(ServiceClass);
module.exports = mongoose.model('service', serviceSchema);