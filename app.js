const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const bodyParser = require('body-parser'),
	chalk = require('chalk'),
	cors = require('cors'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
	dotenv = require ('dotenv/config');

/* 
	MIDDLEWARE
*/
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/*
	RUTAS	
*/
const services = require('./routes/services.route.js');
app.use('/services', services);

/*
	CONEXIÓN A LA MONGODB LOCAL
*/
mongoose.set('useFindAndModify', false);
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect(process.env.DATA_BASE, (err, res) => {
	if(err) throw(err);
	
	console.log("Successful connection to local MongoDB server", chalk.green('✓'));
	app.listen(port, function() {
		console.log('App is running at http://localhost:' + port);
		console.log(chalk.black.italic('Appointment. v1.0'));
	});
});

module.exports = app;