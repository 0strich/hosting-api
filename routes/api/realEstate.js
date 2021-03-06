const express = require("express");

const router = express.Router();
const vdFn = require("../../validators/validatorFn");
const vdArrays = require("../../validators/validatorArrays");
const realEstateController = require("../../controllers/realEstate");

// 모든 신청 정보 조회
router.get("/", realEstateController.getApplicants);

// 사용자 신청 정보 등록
router.post(
  "/applicant",
  vdArrays.postApplicant,
  vdFn.returnParamVD,
  realEstateController.postApplicant
);

module.exports = router;
