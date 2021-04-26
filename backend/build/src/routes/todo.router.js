"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todo_controller_1 = __importDefault(require("../controllers/todo.controller"));
const router = express_1.Router();
router.get("/", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new todo_controller_1.default();
    const response = yield controller.getTodos();
    return res.send(response);
}));
router.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new todo_controller_1.default();
    const response = yield controller.getTodo(req.params.id);
    return res.send(response);
}));
router.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new todo_controller_1.default();
    const response = yield controller.createTodo(req.body);
    return res.send(response);
}));
router.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new todo_controller_1.default();
    const response = yield controller.deleteTodo(req.params.id);
    return res.send(response);
}));
router.post("/update/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const controller = new todo_controller_1.default();
    const response = yield controller.updateTodo(req.params.id, req.body);
    return res.send(response);
}));
exports.default = router;
