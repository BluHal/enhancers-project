const router = require("express").Router();
const { getAllCitiesInfo } = require("../controllers/citiesInfo");

router.route("/").get(getAllCitiesInfo);

module.exports = router;
