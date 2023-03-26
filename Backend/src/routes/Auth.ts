import { Router } from "express";
import { RegisterCtrl, LoginCtrl } from "../controllers/Auth";
import { validBody, validBodyForgotPassword } from "../middlewares/Entities/User.middleware";

const router = Router();

router.post("/register", validBody, RegisterCtrl);
router.post("/login", LoginCtrl);

export { router };
