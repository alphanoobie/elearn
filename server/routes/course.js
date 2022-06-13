import express from "express";
import { requireSignIn } from "../middlewares";

const router = express.Router();

//controller
import {
    uploadImage,
    removeImage
  } from "../controllers/course";

router.post("/course/upload-image", uploadImage);
router.post("/course/remove-image", removeImage);


module.exports = router;
