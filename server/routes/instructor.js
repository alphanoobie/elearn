import express from "express";
import { requireSignIn } from "../middlewares";

const router = express.Router();

//controller
import {
    makeInstructor
} from "../controllers/instructor";

router.post('/make-instructor', requireSignIn, makeInstructor )



module.exports = router;
