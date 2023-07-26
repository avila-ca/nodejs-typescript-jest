"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var add_1 = __importDefault(require("../add"));
var newTask = {
    task: "plantar un arbol",
    isCompleted: false
};
describe('show the new task object', function () {
    test('{"isCompleted": false, "task": "plantar un arbol"}', function () {
        expect((0, add_1.default)(newTask.task)).toStrictEqual(newTask);
    });
});
