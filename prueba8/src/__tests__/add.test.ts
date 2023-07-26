import addTask from "../add"
import TodoTask from "../ITodoTask"

const newTask:TodoTask = {
    task:"plantar un arbol",
    isCompleted:false
}

describe('show the new task object', () => {
    test('{"isCompleted": false, "task": "plantar un arbol"}', () => {
        expect(addTask(newTask.task)).toStrictEqual(newTask)
    })
})