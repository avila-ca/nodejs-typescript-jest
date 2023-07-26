 import TodoTask from "./ITodoTask";

 
 export default function addTask(task:string):TodoTask{
    const newTask:TodoTask = {
        task: task,
        isCompleted: false, 
    }
   // console.log(task);
    
    return newTask;

 }