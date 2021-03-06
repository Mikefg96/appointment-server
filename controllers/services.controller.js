const Service = require('../models/services.model');

exports.loadServices = async(req, res) => {

    Service.find({}, (err, services) => {
        if(err) 
            res.status(500).json({
                err: true,
                message: err,
                obj: null
            });

        res.status(200).json({
            err: false,
            message: "Success!",
            data: services
        });
    });
}

exports.createService = async(req, res) =>  {
    
    const newService = new Service({
        name: req.body.name,
        price: req.body.price,
    });

    try {
        let newObj = await newService.save();
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
