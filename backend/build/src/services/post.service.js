"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostService = void 0;
class PostService {
    constructor() {
        this.index = () => {
            return "Index From Service";
        };
        this.create = () => {
            return "Create from service";
        };
        this.update = () => {
            return "Update From Service";
        };
        this.delete = () => {
            return "Delete From Service";
        };
    }
}
exports.PostService = PostService;
