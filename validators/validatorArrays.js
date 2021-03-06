const { check } = require("express-validator");

// 이름, 이메일, 개인정보 제공 동의
const postApplicant = [
  check("email", "email error")
    .normalizeEmail()
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  check("name", "name error").isString().isLength({ min: 2, max: 30 }),
  check("agreePrivacy", "agreePrivacy error").isBoolean(),
];

module.exports = {
  postApplicant,
};
