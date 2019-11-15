const mongoose = require('mongoose'),
    serviceSchema = mongoose.Schema({
        name: {
            type: String,
            require: true
        },
        price: {
            type: Number,
            require: true
        },
        imgUrl: {
            type: String,
            require: true
        }
    });
    
module.exports = mongoose.model('service', serviceSchema);