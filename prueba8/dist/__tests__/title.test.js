"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var title_1 = __importDefault(require("../title"));
describe('App Title', function () {
    test('should show "To do List"', function () {
        expect((0, title_1.default)("To do List")).toBe(console.log("To do List"));
    });
    test('shold show ""(nothing)', function () {
        expect((0, title_1.default)("")).toBe(console.log(""));
    });
});
