const express = require("express");
const router = express.Router();
const axios = require("axios");

const apikey = process.env.DARKSKY_API_KEY;
const coords = "33.7642196,-84.3628605"; // this will eventually be dynamic
let currentWeather = {
  temperature: Number,
  summary: String,
  windSpeed: Number,
  humidity: Number,
  cloudCover: Number,
  precipType: Number
};

router.get("/weather", (req, res, next) => {
  axios
    .get(`https://api.darksky.net/forecast/${apikey}/${coords}`)
    .then(response => {
      for (const prop in currentWeather) {
        if (prop in response.data.currently) {
          currentWeather[prop] = response.data.currently[prop];
        }
      }

      res.send(currentWeather);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
