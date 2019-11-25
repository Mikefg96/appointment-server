const describe = require('mocha').describe,
    it = require('mocha').it;
const expect = require('chai').expect;

const ServiceModel = require("../models/services.model");

describe('Services', () => {

    describe('Add service', () => {
        describe('given that a field is missing', () => {
            it('should throw error when name is missing', () => {

                let newService = new ServiceModel({
                    price: 0
                });

                let result = newService.validateUserInput();
                expect(result).to.be.equal(false);
            });

            it('should throw error when price is mising', () => {

                let newService = new ServiceModel({
                    name: 'MRI'
                });

                let result = newService.validateUserInput();
                expect(result).to.be.equal(false);
            });
        });

        describe('given that data needs validation', () =>{
            it('name should be a string', () => {

                let newService = new ServiceModel({
                    name: 'MRI',
                    price: 0
                });

                expect(newService.name).to.be.a('string');
            });

            it('price should be number', () => {

                let newService = new ServiceModel({
                    name: 'MRI',
                    price: 0
                });

                expect(newService.price).to.be.a('number');
            });
        });
    });
});