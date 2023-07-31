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
} else {

  console.log('\t\t To Do List\n\nOptions:\n\nadd\t To write a new task.\ndone:\t To check a done task with the id number.\ndelete:\t To remove a task with the id number.\nlist:\t To list all tasks\n\n\n');
  console.log('I.E.: node src/index.js add " Plantar un arbol"\n\n');
  
}
