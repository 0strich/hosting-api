const jwt = require("jsonwebtoken");

const makeUserJWT = (payload) =>
  new Promise((resolve, reject) => {
    const secretOrPrivateKey = process.env.JWT_SECRET;
    const options = { expiresIn: 60 * 60 * 24 * 90 };
    jwt.sign(payload, secretOrPrivateKey, options, (err, token) => {
      if (err) {
        reject({ code: 500, message: err });
      } else {
        resolve({
          jwt: token,
          name: payload.name,
          userId: payload.userId,
          email: payload.email,
          degree: payload.degree,
        });
      }
    });
  });

module.exports = {
  makeUserJWT,
};
