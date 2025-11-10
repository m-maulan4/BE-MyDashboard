import { Router } from "express";
import * as todo from "./todoController.js";
const todoRouter = Router();
todoRouter.get("/todo", todo.getTodoAll);
todoRouter.post("/todo", todo.postTodo);
todoRouter.patch("/todo/next", todo.nextStatus);
todoRouter.patch("/todo/back", todo.backStatus);
todoRouter.put("/todo", todo.editTodo);
export default todoRouter;
