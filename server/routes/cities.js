const router = require("express").Router();
let City = require("../models/cities.model");

router.route("/").get((req, res) => {
  City.find()
    .then((cities) => res.json(cities))
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

module.exports = router;
