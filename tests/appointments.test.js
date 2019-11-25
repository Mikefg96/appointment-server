const describe = require('mocha').describe,
    it = require('mocha').it;
const expect = require('chai').expect;

const AppointmentModel = require("../models/appointments.model");

describe('Appointments', () => {

    describe('Add appointment', () => {
        describe('given that a field is missing', () => {
            it('should throw error when name is missing', () => {

                let newAppointment = new AppointmentModel({
                    lastName: 'Flores',
                    date: '10/10/10'
                });

                let result = newAppointment.validateUserInput();
                expect(result).to.be.equal(false);
            });

            it('should throw error when lastName is mising', () => {

                let newAppointment = new AppointmentModel({
                    name: 'Miguel',
                    date: '10/10/10'
                });

                let result = newAppointment.validateUserInput();
                expect(result).to.be.equal(false);
            });


            it('should throw error when date is mising', () => {

                let newAppointment = new AppointmentModel({
                    name: 'Miguel',
                    lastName: 'Flores'
                });

                let result = newAppointment.validateUserInput();
                expect(result).to.be.equal(false);
            });
        });

        describe('given that data needs validation', () =>{
            it('all fields should match model data type', () => {

                let newAppointment = new AppointmentModel({
                    name: 'Miguel',
                    lastName: 'Flores',
                    date: '10/10/10'
                });

                expect(newAppointment.name).to.be.a('string');
                expect(newAppointment.lastName).to.be.a('string');
                expect(newAppointment.date).to.be.a('date');
            });
        });

        describe('given that service does not exist', () => {
            it('should throw error when scheduling appointment', () => {

                let availableServices_ids = ['5ddb6ead8c936642352ad076', '5ddb6ead8c936642352ad077']

                let newAppointment = {
                    name: 'Miguel',
                    lastName: 'Flores',
                    date: '10/10/10',
                    service_id: '5ddb6ead8c936642352ad078'
                };

                let errorFlag;
                availableServices_ids.forEach(service_id => {
                    service_id == newAppointment.service_id ? errorFlag = false : errorFlag = true;
                });

                expect(errorFlag).to.be.equal(true);
            });
        });

        describe('given that two appointments have the same date and service', () => {
            it('should throw error when trying to schedule', () => {


                let scheduledAppointments = [
                    {
                        name: 'Miguel',
                        lastName: 'Flores',
                        date: '10/10/10',
                        service_id: '5ddb6ead8c936642352ad076'
                    },
                    {
                        name: 'Joaquín',
                        lastName: 'Ramírez',
                        date: '11/11/11',
                        service_id: '5ddb6ead8c936642352ad077'
                    }
                ];

                let newAppointment = {
                    name: 'Test name',
                    lastName: 'Test last name',
                    date: '11/11/11',
                    service_id: '5ddb6ead8c936642352ad077'
                };

                let errorFlag;
                scheduledAppointments.forEach(appointment => {
                    if(appointment.date == newAppointment.date && appointment.service_id == newAppointment.service_id) {
                        errorFlag = true;
                    }
                });

                expect(errorFlag).to.be.equal(true);
            });
        });
    });
});