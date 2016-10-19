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

module.exports = ctrl;