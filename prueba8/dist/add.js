"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTask(task) {
    var newTask = {
        task: task,
        isCompleted: false,
    };
    // console.log(task);
    return newTask;
}
exports.default = addTask;
