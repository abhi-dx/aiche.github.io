var express = require('express');
var router = express.Router();
var Kaiseki = require('kaiseki');
var app_id = "mNVYu3bFR5QzmSaQ1YLfgF5ZSEqRw5VlagmXjta9";
var master_id = "XQbcWD8bhNoumKhiP5F9mgUyesK108OJONibMkZb";
var rest_id = "ZeSCKwwaX8nzzl2ZboeANbszMea2ZpokJ9W9FIEY";
var set_up = new Kaiseki(app_id, rest_id);




/* GET home page. */
router.get('/', function(req, res, next) {
	var url = require('url').parse(req.url, true).query;
	var co_adc = url.co_adc;
	var co_ppm = url.co_ppm;
	var className = 'pollutiondata';
	var pollutants = [
	{
		CO_PPM: co_ppm,
		CO_ADC: co_adc
	}
	]
	
  	set_up.createObjects(className, pollutants, function(err, res, body, success) {
  	console.log("done!");
});
});

module.exports = router;
