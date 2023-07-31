"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const tasks_1 = require("./tasks");
const args = require("yargs").argv;
(0, tasks_1.loadTasks)();
const command = args._[0];
if (command === "add") {
    const description = args._[1];
    (0, tasks_1.addTask)(description);
    console.log("Task added successfully!");
}
else if (command === "done") {
    const id = args._[1];
    (0, tasks_1.markTaskAsDone)(id);
    console.log("Task marked as done!");
}
else if (command === "delete") {
    const id = args._[1];
    (0, tasks_1.deleteTask)(id);
    console.log("Task deleted successfully!");
}
else if (command === "list") {
    (0, tasks_1.listTasks)().forEach((task) => {
        const status = task.done ? "[x]" : "[ ]";
        console.log(`${status} ${task.id}. ${task.description}`);
    });
}
