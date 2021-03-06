const EngEdu = require("../libs/engEdu");

const create = (data) => {
  const engEdu = new EngEdu(data);
  return engEdu.save();
};

const getApplicants = () => {
  return EngEdu.find().lean();
};

module.exports = {
  create,
  getApplicants,
};
