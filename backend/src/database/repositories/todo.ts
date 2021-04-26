import {DeleteResult, getRepository, UpdateResult} from "typeorm"
import { TodoEntity } from "../entities/todo.entity";

export interface ITodoPayload {
    name: string
    important: boolean
    done: boolean
}

export const getTodos = async (): Promise<Array<TodoEntity>> => {
    const todoRepository = getRepository(TodoEntity)
    return todoRepository.find()
}

export const getTodo = async (id: number): Promise<TodoEntity | null> => {
    const todoRepository = getRepository(TodoEntity)
    const todo = await todoRepository.findOne({ id: id })
    if (!todo) return null
    return todo
}

export const createTodo = async (payload: ITodoPayload): Promise<TodoEntity> => {
    const todoRepository = getRepository(TodoEntity)
    const todo = new TodoEntity()
    return todoRepository.save({
        ...todo,
        ...payload
    })
}

export const deleteTodo = async (id: number): Promise<DeleteResult> => {
    const todoRepository = getRepository(TodoEntity)
    const todo = await todoRepository.delete({ id: id })
    return todo;
}

export const updateTodo = async (id: number, payload: ITodoPayload): Promise<UpdateResult> => {
    const todoRepository = getRepository(TodoEntity)
    return todoRepository.update(id, {
        ...payload
    })
}
