import express from "express";
import { requireSignIn } from "../middlewares";

const router = express.Router();

//controller
import {
  register,
  login,
  logout,
  currentUser,
  sendTestEmail,
} from "../controllers/auth";

router.post("/register", register);
router.post("/login", login);
router.get("/logout", logout);
router.get("/current-user", requireSignIn, currentUser);
router.get("/send-email", sendTestEmail);
module.exports = router;
