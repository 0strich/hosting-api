const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
const engEduSchema = require("../models/engEdu");

module.exports = mongoose.model("engEdu", engEduSchema);
