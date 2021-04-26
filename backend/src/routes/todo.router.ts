import { Router } from 'express';
import TodoController from "../controllers/todo.controller";

const router = Router();

router.get("/", async (_req, res) => {
    const controller = new TodoController()
    const response = await controller.getTodos()
    return res.send(response)
});

router.get("/:id", async (req, res) => {
    const controller = new TodoController()
    const response = await controller.getTodo(req.params.id)
    return res.send(response)
});

router.post("/", async (req, res) => {
    const controller = new TodoController()
    const response = await controller.createTodo(req.body);
    return res.send(response)
});

router.delete("/:id", async (req, res) => {
    const controller = new TodoController()
    const response = await controller.deleteTodo(req.params.id)
    return res.send(response)
});

router.post("/update/:id", async (req, res) => {
    const controller = new TodoController()
    const response = await controller.updateTodo(req.params.id, req.body)
    return res.send(response)
});

export default router
