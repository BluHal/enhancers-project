const basePath = `https://api.openweathermap.org/data/2.5/weather`;
const axios = require("axios");

async function getCurrentWeather(lat, lon) {
  const response = await axios.get(basePath, {
    params: {
      lat: lat,
      lon: lon,
      appid: process.env.OPEN_WEATHER_API_KEY,
    },
  });
  return response.data.weather[0].description;
}

module.exports.getCurrentWeather = getCurrentWeather;
