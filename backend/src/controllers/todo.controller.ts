import { Router, Response, Request } from 'express'
import { Get, Route, Tags, Post, Body, Path, Delete } from 'tsoa'
import { getTodos, getTodo, createTodo, deleteTodo, updateTodo, ITodoPayload } from "../database/repositories/todo";
import { TodoEntity } from "../database/entities/todo.entity";
import { DeleteResult, UpdateResult } from "typeorm";

@Route("todos")
@Tags("Todo")
export default class TodoController {
    // public router: Router
    // private postService: PostService


    // constructor() {
    //     this.router = Router()
    //     this.postService = new PostService()
    //     this.routes()
    // }
    @Get("/")
    public async getTodos(): Promise<Array<TodoEntity>> {
        return getTodos()
    }

    @Get("/:id")
    public async getTodo(@Path() id: string): Promise<TodoEntity | null> {
        return getTodo(Number(id))
    }

    @Post("/")
    public async createTodo(@Body() body: ITodoPayload): Promise<TodoEntity> {
        return createTodo(body)
    }

    @Delete("/:id")
    public async deleteTodo(@Path() id: string): Promise<DeleteResult | null> {
        return deleteTodo(Number(id))
    }

    @Post("/update/:id")
    public async updateTodo(@Path() id: string, @Body() body: ITodoPayload): Promise<UpdateResult> {
        return updateTodo(Number(id), body)
    }
}
