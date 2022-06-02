const basePath = `https://api.yelp.com/v3/businesses/search`;
const axios = require("axios");

async function getAllBusinesses(city) {
  const response = await axios.get(basePath, {
    headers: {
      Authorization: `Bearer ${process.env.YELP_API_KEY}`,
    },
    params: {
      location: city,
    },
  });
  return response.data.businesses;
}

module.exports.getAllBusinesses = getAllBusinesses;
