const City = require("../models/cities.model");
const openWeather = require("../externalCalls/openWeather");
const yelp = require("../externalCalls/yelp");

const getAllCitiesInfo = async (req, res) => {
  try {
    const cities = await City.find();
    let cityInfos = [];
    for (var i = 0; i < cities.length; i++) {
      const cityName = cities[i].name;

      const weather = await openWeather.getCurrentWeather(
        cities[i].lat,
        cities[i].lon
      );

      const businesses = await yelp.getAllBusinesses(cityName);

      cityInfos.push({
        name: cityName,
        weather: weather,
        businesses: businesses,
      });
    }
    res.json(cityInfos);
  } catch (error) {
    res.status(500).json({
      msg: error.message,
    });
  }
};

module.exports = {
  getAllCitiesInfo,
};
