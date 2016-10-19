// our module requires express + express.Router
var express = require('express');
var ctrl = express.Router();


ctrl.get('/', function(req, res, next) {
	res.render('index', {
		message: "It is Russell\'s Birthday!!!"
	});
});

ctrl.get('/home', function(req,res, next) {
	res.render('hello',  {
		name: "Rena Banka",
		adjective: "awesome",
		framework: 'Express.js'
	});
});

// export controller
module.exports = ctrl;

