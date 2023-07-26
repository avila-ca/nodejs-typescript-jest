"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var allTask = [{ task: "tengo que acabar", isCompleted: false }];
function removeTask(allTask, delId) {
    allTask.splice(delId, 1);
    return allTask;
}
exports.default = removeTask;
console.log(removeTask(allTask, 0).length);
