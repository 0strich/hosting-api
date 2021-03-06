const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const realEstateSchema = require("../models/realEstate");

module.exports = mongoose.model("realEstate", realEstateSchema);
