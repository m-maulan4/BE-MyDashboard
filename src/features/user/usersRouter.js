import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
import middle from "../middleware/middle.js";
const usersRouter = Router();
usersRouter.get("/", middle, getUsers);
export default usersRouter;
