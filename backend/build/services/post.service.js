"use strict";
exports.__esModule = true;
exports.PostService = void 0;
var PostService = /** @class */ (function () {
    function PostService() {
        this.index = function () {
            return "Index From Service";
        };
        this.create = function () {
            return "Create from service";
        };
        this.update = function () {
            return "Update From Service";
        };
        this["delete"] = function () {
            return "Delete From Service";
        };
    }
    return PostService;
}());
exports.PostService = PostService;
