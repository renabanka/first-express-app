var express = require('express');
var ctrl = express.Router();

//data for our routes

var data = [
	{
		name: 'Yacht Week',
		location: "Croatia",
		notes: "The Ocean!"

	},

	{
		name: 'Outside Lands',
		location: 'SF',
		notes: 'awesome food!'
	},

	{
		name:'The Greek Theatre',
		location: 'los angeles',
		notes: 'Because being under the stars is great!'
	}


];

//build our first real API
ctrl.get('/', function(req, res, next) {
	res.json(data);
});

ctrl.get('/1', function(req, res, next) {
	res.json(data[0]);
});

ctrl.get('/2', function(req, res, next) {
	res.json(data[1]);
});

ctrl.get('/3', function (req,res, next) {
	res.json(data[2]);
});

module.exports = ctrl;
