var express = require('express');
var ctrl = express.Router();


var users = [
{
		username: 'test',
		password: 'password123'
	},

{
		username: 'test1',
		password: 'password1234'
	},

{
		username: 'test2',
		password: 'password12345'
	}


];

ctrl.get('/', function(req, res, next) {
	// res.json({
	// 	username: 'test',
	// 	password: 'password123'
	// });
	res.json(users);
});


ctrl.get('/1', function(req, res, next) {
	res.json(users[0]);
});

ctrl.get('/2', function(req, res, next) {
	res.json(users[1]);
});

ctrl.get('/3', function (req,res, next) {
	res.json(users[2]);
});

module.exports = ctrl;