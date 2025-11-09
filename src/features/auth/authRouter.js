import { Router } from "express";
import {
  authLogin,
  authLogout,
  authRegis,
  authToken,
} from "../controllers/authController.js";

const authRouter = Router();
authRouter.post("/auth/registertion", authRegis);
authRouter.post("/auth/login", authLogin);
authRouter.post("/auth/logout", authLogout);
authRouter.get("/auth/newtoken", authToken);

export default authRouter;
