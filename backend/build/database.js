"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_entity_1 = require("./src/database/entities/todo.entity");
const config = {
    type: "postgres",
    host: process.env.POSTGRES_HOST || "http://172.25.0.4",
    port: Number(process.env.POSTGRES_PORT) || 5432,
    username: process.env.POSTGRES_USER || "postgres",
    password: process.env.POSTGRES_PASSWORD || "postgres",
    database: process.env.POSTGRES_DB || "postgres",
    entities: [todo_entity_1.TodoEntity],
    synchronize: true,
};
exports.default = config;
