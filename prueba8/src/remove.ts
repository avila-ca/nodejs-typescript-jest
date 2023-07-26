import TodoTask from "./ITodoTask";


const allTask:TodoTask[] = [{task:"tengo que acabar", isCompleted:false}];

export default function removeTask(allTask:TodoTask[], delId:number):TodoTask[]{

    allTask.splice(delId, 1);
    return allTask;
}

console.log(removeTask(allTask, 0).length);

