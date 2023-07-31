import * as fs from "fs";

const TASKS_FILE_PATH = "tasks.json";

interface Task {
  id: number;
  description: string;
  done: boolean;
}

let tasks: Task[] = [];


function saveTasks(): void {
  fs.writeFileSync(TASKS_FILE_PATH, JSON.stringify(tasks), "utf-8");
}

function loadTasks(): void {
  try {
    const data = fs.readFileSync(TASKS_FILE_PATH, "utf-8");
    tasks = JSON.parse(data);
  } catch (err) {
    tasks = [];
  }
}

function addTask(description: string): void {
  const newTask: Task = {
    id: tasks.length + 1,
    description,
    done: false,
  };
  console.log('llllleeeeennnngggtttth'+tasks.length);
  tasks.push(newTask);
  saveTasks();
}

function markTaskAsDone(id: number): void {
  const task = tasks.find((t) => t.id === id);
  if (task) {
    task.done = true;
    saveTasks();

  }
}

function deleteTask(id: number): void {
  const taskIndex = tasks.findIndex((t) => t.id === id);
  console.log('aaaa' +taskIndex);
  
  if (taskIndex !== -1) {
    tasks.splice(taskIndex, 1);
    saveTasks();

  }
}

function listTasks(): Task[] {
  loadTasks();
  return tasks;
}

export { addTask, markTaskAsDone, deleteTask, listTasks, loadTasks };
