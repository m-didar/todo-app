"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
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
const tsoa_1 = require("tsoa");
const todo_1 = require("../database/repositories/todo");
let TodoController = class TodoController {
    // public router: Router
    // private postService: PostService
    // constructor() {
    //     this.router = Router()
    //     this.postService = new PostService()
    //     this.routes()
    // }
    getTodos() {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.getTodos();
        });
    }
    getTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.getTodo(Number(id));
        });
    }
    createTodo(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.createTodo(body);
        });
    }
    deleteTodo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.deleteTodo(Number(id));
        });
    }
    updateTodo(id, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return todo_1.updateTodo(Number(id), body);
        });
    }
};
__decorate([
    tsoa_1.Get("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodos", null);
__decorate([
    tsoa_1.Post("/"),
    __param(0, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "getTodo", null);
__decorate([
    tsoa_1.Get("/:id"),
    __param(0, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "createTodo", null);
__decorate([
    tsoa_1.Delete("/:id"),
    __param(0, tsoa_1.Path()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "deleteTodo", null);
__decorate([
    tsoa_1.Post("/update/:id"),
    __param(0, tsoa_1.Path()), __param(1, tsoa_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], TodoController.prototype, "updateTodo", null);
TodoController = __decorate([
    tsoa_1.Route("todos"),
    tsoa_1.Tags("Todo")
], TodoController);
exports.default = TodoController;
