const express = require("express");

const router = express.Router();
const vdFn = require("../../validators/validatorFn");
const vdArrays = require("../../validators/validatorArrays");
const engEduController = require("../../controllers/engEdu");

// 모든 신청 정보 조회
router.get("/", engEduController.getApplicants);

// 사용자 신청 정보 등록
router.post(
  "/applicant",
  vdArrays.postApplicant,
  vdFn.returnParamVD,
  engEduController.postApplicant
);

module.exports = router;
