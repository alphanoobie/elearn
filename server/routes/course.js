import express from "express";
import formidable from 'express-formidable'
import { isInstructor, requireSignIn } from "../middlewares";

const router = express.Router();

//controller
import { uploadImage, removeImage, create, read, uploadVideo, removeVideo } from "../controllers/course";

//image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignIn, isInstructor, create);
router.get('/course/:slug', read)
router.post('/course/video-upload/:instructorId', requireSignIn, formidable(), uploadVideo)
router.post('/course/video-remove/:instructorId', requireSignIn, removeVideo)


module.exports = router;
