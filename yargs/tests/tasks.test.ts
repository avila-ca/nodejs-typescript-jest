// tests/tasks.test.ts
import { addTask, markTaskAsDone, deleteTask, listTasks } from "../src/tasks";

test("Agrega una nueva tarea", () => {
  addTask("Tarea para  crear");
  const tasks = listTasks();
  expect(tasks).toHaveLength(1);
  expect(tasks[0]).toEqual(expect.objectContaining({
    description: "Tarea de prueba",
    done: false,
  }));
});

test("Marca una tarea como hecha", () => {
  addTask("Tarea para marcar");
  markTaskAsDone(1);
  const tasks = listTasks();
  expect(tasks[0].done).toBe(true);
});

test("Elimina una tarea", () => {
  addTask("Tarea para eliminar");
  deleteTask(1);
  expect(listTasks()[1]).toEqual(expect.objectContaining);
});
