import express from "express";
import formidable from "express-formidable";
import { isInstructor, requireSignIn, isEnrolled } from "../middlewares";

const router = express.Router();

//controller
import {
  uploadImage,
  removeImage,
  create,
  read,
  uploadVideo,
  removeVideo,
  addLesson,
  update,
  removeLesson,
  updateLesson,
  publishCourse,
  unpublishCourse,
  courses,
  checkEnrollment,
  freeEnrollment,
  paidEnrollment,
  stripeSuccess,
  userCourses,
  markCompleted,
  listCompleted
} from "../controllers/course";

router.get("/courses", courses);

//image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignIn, isInstructor, create);
router.put("/course/:slug", requireSignIn, update);
router.get("/course/:slug", read);
router.post(
  "/course/video-upload/:instructorId",
  requireSignIn,
  formidable(),
  uploadVideo
);
router.post("/course/video-remove/:instructorId", requireSignIn, removeVideo);

//publish unpublish
router.put("/course/publish/:courseId", requireSignIn, publishCourse);
router.put("/course/unpublish/:courseId", requireSignIn, unpublishCourse);

router.post("/course/lesson/:slug/:instructorId", requireSignIn, addLesson);
router.put("/course/:slug/:lessonId", requireSignIn, removeLesson);
router.put("/course/lesson/:slug/:instructorId", requireSignIn, updateLesson);

router.get("/check-enrollment/:courseId", requireSignIn, checkEnrollment);

//enrollment
router.post("/free-enrollment/:courseId", requireSignIn, freeEnrollment);
router.post("/paid-enrollment/:courseId", requireSignIn, paidEnrollment);

router.get("/stripe-success/:courseId", requireSignIn, stripeSuccess);

router.get("/user-courses", requireSignIn, userCourses);
router.get("/user/course/:slug",requireSignIn, isEnrolled, read);

//mark completed
router.post('/mark-completed', requireSignIn, markCompleted)

//get complted
router.post('/list-completed', requireSignIn, listCompleted)

module.exports = router;
