import express from "express"
import TodoController from "../controllers/todo.controller";
import TodoRouter from "./todo.router"

const router = express.Router()

router.use("/todos", TodoRouter)

export default router
