import express from "express";
import { isInstructor, requireSignIn } from "../middlewares";

const router = express.Router();

//controller
import { uploadImage, removeImage, create, read } from "../controllers/course";

//image
router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);

// course
router.post("/course", requireSignIn, isInstructor, create);
router.get('/course/:slug', read)
module.exports = router;
