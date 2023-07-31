// src/index.ts
import { addTask, markTaskAsDone, deleteTask, listTasks, loadTasks } from "./tasks";
const args = require("yargs").argv;
loadTasks();
const command = args._[0];

if (command === "add") {
  const description = args._[1];
  addTask(description);
  console.log("Task added successfully!");
} else if (command === "done") {
  const id = args._[1];
  markTaskAsDone(id);
  console.log("Task marked as done!");
} else if (command === "delete") {
  const id = args._[1];
  deleteTask(id);
  console.log("Task deleted successfully!");
} else if (command === "list") {
  listTasks().forEach((task) => {
    const status = task.done ? "[x]" : "[ ]";
    console.log(`${status} ${task.id}. ${task.description}`);
  });
}
