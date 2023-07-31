"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// tests/tasks.test.ts
const tasks_1 = require("../src/tasks");
test("Agrega una nueva tarea", () => {
    (0, tasks_1.addTask)("Tarea para  crear");
    const tasks = (0, tasks_1.listTasks)();
    expect(tasks).toHaveLength(1);
    expect(tasks[0]).toEqual(expect.objectContaining({
        description: "Tarea de prueba",
        done: false,
    }));
});
test("Marca una tarea como hecha", () => {
    (0, tasks_1.addTask)("Tarea para marcar");
    (0, tasks_1.markTaskAsDone)(1);
    const tasks = (0, tasks_1.listTasks)();
    expect(tasks[0].done).toBe(true);
});
test("Elimina una tarea", () => {
    (0, tasks_1.addTask)("Tarea para eliminar");
    (0, tasks_1.deleteTask)(1);
    expect((0, tasks_1.listTasks)()[1]).toEqual(expect.objectContaining);
});
