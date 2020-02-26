const express = require('express');
const router = express.Router();
const axios = require('axios');
const getCurrentWeather = require('../models/currentWeather');

const apikey = process.env.darksky_api_key;
const coords = '33.7642196,-84.3628605'; // this will eventually be dynamic

const instance = axios.create({
	headers: { 'Access-Control-Allow-Origin': '*' }
});

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

router.get('/weather', (req, res, next) => {
	instance
		.get(`https://api.darksky.net/forecast/${apikey}/${coords}`)
		.then((response) => {
			const currentweather = getCurrentWeather(response.data.currently);
			res.send(currentweather);
		})
		.catch((error) => {
			console.log(error);
		});
});

module.exports = router;
