const mongoose = require('mongoose');
const request = require('supertest');
const describe = require('mocha').describe;
const it = require('mocha').it;

const app = require('../app.js');

mongoose.Promise = Promise;
mongoose.connect(process.env.TEST_DATA_BASE, { 
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true  
});

describe('INTEGRATION TESTING', () => {

    after(() => {
        mongoose.connection.db.dropDatabase();
    });

    describe('SERVICES', () => {

        describe('/services', () => {
            it('should return all available services', (done) => {
                request(app)
                    .get('/services')
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200)
                    .end((err, res)  => {
                        if(err) {
                            done(err);
                        } else {
                            done();
                        }
                });
            });
        });
    
        describe('/services/create', () => {
            it('should create service', (done) => {
                request(app)
                    .post('/services/create')
                    .send({ 
                        name: 'Servicio de prueba',
                        price: 0,
                        imgUrl: null
                     })
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200)
                    .end((err, res)  => {
                        if(err) {
                            done(err);
                        } else {
                            done();
                        }
                });
            });
        });
    });

    describe('APPOINTMENTS', () => {

        describe('/appointments', () => {
            it('should return all scheduled appointments', (done) => {
                request(app)
                    .get('/appointments')
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200)
                    .end((err, res)  => {
                        if(err) {
                            done(err);
                        } else {
                            done();
                        }
                });
            });
        });
    
        describe('/appointments/create', () => {
            it('should create an appointment', (done) => {
                request(app)
                    .post('/appointments/create')
                    .send({ 
                        name: 'Miguel',
                        lastName: 'Flores',
                        date: '1970-01-01T00:00:00.000Z',
                        service_id: null
                    })
                    .expect('Content-Type', 'application/json; charset=utf-8')
                    .expect(200)
                    .end((err, res)  => {
                        if(err) {
                            done(err);
                        } else {
                            done();
                        }
                });
            });
        });

        // describe('/appointments/delete/:appointment_id', (done) => {
        //     request(app)
        //         .get('/appointments/delete/5dd33df781def81cc39423c9')
        //         .expect('Content-Type', 'application/json; charset=utf-8')
        //         .expect(500)
        //         .end((err, res)  => {
        //             if(err) {
        //                 done(err);
        //             } else {
        //                 done();
        //             }
        //     });
        // });
    });
});