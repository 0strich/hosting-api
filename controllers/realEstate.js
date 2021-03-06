const axios = require("axios");
const cwr = require("../utils/createWebResp");
const realEstateService = require("../services/realEstate");

// 모든 신청 정보 조회
const getApplicants = async (req, res) => {
  try {
    const applicatnsInfo = await realEstateService.getApplicants();

    return cwr.createWebResp(res, 200, applicatnsInfo);
  } catch (err) {
    return cwr.errorWebResp(res, 403, `E0000 - getApplicants`, err.message);
  }
};

// 사용자 신청 정보 등록
const postApplicant = async (req, res) => {
  try {
    const { name, email, agreePrivacy } = req.body;

    const applicantInfo = { name, email, agreePrivacy };

    const postInfo = await realEstateService.create(applicantInfo);

    return cwr.createWebResp(res, 200, { success: true });
  } catch (err) {
    return cwr.errorWebResp(res, 403, `E0000 - postApplicant`, err.message);
  }
};

module.exports = { getApplicants, postApplicant };
