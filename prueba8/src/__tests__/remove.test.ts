
import TodoTask from "../ITodoTask";
import removeTask from "../remove";

let allTask:TodoTask[] = [{task:"tengo que acabar", isCompleted:false},{task:"plantar un arbol", isCompleted:false}];

describe('Delete array object', () => {
    test('We pass an array of objects with ID of task to remove,\n and the function return the modified array', () => 
    expect(removeTask(allTask, 0)[0].task).toBe('plantar un arbol'))
    
})