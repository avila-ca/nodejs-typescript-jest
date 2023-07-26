"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var remove_1 = __importDefault(require("../remove"));
var allTask = [{ task: "tengo que acabar", isCompleted: false }];
describe('Delete array object', function () {
    test('We pass an array of objects with ID of task to remove,\n and the function return the modified array', function () {
        return expect((0, remove_1.default)(allTask, 0).length).toBe(0);
    });
});
