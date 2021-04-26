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
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodo = exports.deleteTodo = exports.createTodo = exports.getTodo = exports.getTodos = void 0;
const typeorm_1 = require("typeorm");
const todo_entity_1 = require("../entities/todo.entity");
const getTodos = () => __awaiter(void 0, void 0, void 0, function* () {
    const todoRepository = typeorm_1.getRepository(todo_entity_1.TodoEntity);
    return todoRepository.find();
});
exports.getTodos = getTodos;
const getTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const todoRepository = typeorm_1.getRepository(todo_entity_1.TodoEntity);
    const todo = yield todoRepository.findOne({ id: id });
    if (!todo)
        return null;
    return todo;
});
exports.getTodo = getTodo;
const createTodo = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todoRepository = typeorm_1.getRepository(todo_entity_1.TodoEntity);
    const todo = new todo_entity_1.TodoEntity();
    return todoRepository.save(Object.assign(Object.assign({}, todo), payload));
});
exports.createTodo = createTodo;
const deleteTodo = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const todoRepository = typeorm_1.getRepository(todo_entity_1.TodoEntity);
    const todo = yield todoRepository.delete({ id: id });
    return todo;
});
exports.deleteTodo = deleteTodo;
const updateTodo = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const todoRepository = typeorm_1.getRepository(todo_entity_1.TodoEntity);
    return todoRepository.update(id, Object.assign({}, payload));
});
exports.updateTodo = updateTodo;
