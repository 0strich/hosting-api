const RealEstate = require("../libs/realEstate");

const create = (data) => {
  const realEstate = new RealEstate(data);
  return realEstate.save();
};

const getApplicants = () => {
  return RealEstate.find().lean();
};

module.exports = {
  create,
  getApplicants,
};
