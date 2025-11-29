import "dotenv/config";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
// Router
import userRouter from "./src/features/user/userRouter.js";
import authRouter from "./src/features/auth/authRouter.js";
import todoRouter from "./src/features/todo/todoRouter.js";
import financeRouter from "./src/features/finance/financeRouter.js";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
  })
);
app.use(authRouter);
app.use(userRouter);
app.use(todoRouter);
app.use(financeRouter);

app.listen(3000, () => {
  console.log("app listening on port 3000 ");
});
