import express from "express";
import { requireSignIn } from "../middlewares";

const router = express.Router();

//controller
import {
  makeInstructor,
  getAccountStatus,
  currentInstructor,
  instructorCourses,
  studentCount,
  instructorBalance,
  instructorPayoutSettings
} from "../controllers/instructor";

router.post("/make-instructor", requireSignIn, makeInstructor);
router.post("/get-account-status", requireSignIn, getAccountStatus);
router.get("/current-instructor", requireSignIn, currentInstructor);

router.get("/instructor-courses", requireSignIn, instructorCourses);

router.post('/instructor/student-count', requireSignIn, studentCount )

router.get('/instructor/balance', requireSignIn, instructorBalance)
router.get('/instructor/payout-settings', requireSignIn, instructorPayoutSettings)


module.exports = router;
