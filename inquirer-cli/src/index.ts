import chalk from "chalk";
import figlet from "figlet";
import inquirer from "inquirer";
import { JsonDB, Config } from "node-json-db";
import fs from "fs";
import { log } from "console";

const objFromFile = fs.readFile("./db.json", "utf8", (err, jsonFile) => {
  if (err) {
    console.log(chalk.red("\n\nFile read failed!!!\n\n") + "Press any key");
  } else {
    let objList = JSON.parse(jsonFile);
    return objList;
  }
});

const db = new JsonDB(new Config("./db.json", true, true, "/"));

interface TodoTask {
  id: number;
  task: string;
  isOk: boolean;
}
let data: TodoTask[] = [];
data = [];

function header() {
  console.clear();
  console.log(figlet.textSync("To do List"));
  if (data.length) {
    
    console.table(data);
  }
}

const runQuestions = async () => {
  try {
    let countId: number = 0;
    const result = await db.getObject<TodoTask>("/");
    let test = await db.getData(`${result}`);
    let i: number = 0;

    if (test && i == 0) {
      for (const key in test) {
        countId = Number(key);

      }

      while (i <= countId) {
        data[i] = await db.getObjectDefault<TodoTask>(`/${i}`);
        i++;
      }
    }

    const answers = await getAnswers();

    const newTask: TodoTask = {
      id: ++countId,
      task: answers.taskName,
      isOk: false,
    };

    data.push(newTask);
    await db.push(`/${countId}`, newTask);

    if (answers.ok === true) {
      runQuestions();
    } else {
      let isEdit = await getEdit();
      if (isEdit.edit === true) {
        console.table(data);
        let isOption = await getOption();

        if (isOption.option == "Remove task") {
          const delNum = await getDelTask();
          console.log(typeof delNum.id + "    " + delNum.id);
          data.splice(delNum.id, 1);
          await db.delete(`/${delNum.id}`);
          runQuestions();
        } else if (isOption.option == "Select your done task") {
          const selectTask = await getDoneTask();
          data[selectTask.selectedTask].isOk = true;
          console.log(chalk.strikethrough(data[selectTask.selectedTask].task));
          header();
        } else {
          console.log("no tengo isOption.option   >" + isOption.option + "<");
        }
      } else {
        const isExit = await getExit();
        if (isExit.exit === true) {
          console.log(figlet.textSync("   Bye bye "));
          console.table(data);
          return true;
        } else {
          runQuestions();
        }
      }
    }
  } catch (err: any) {
    console.error(
      `There was an error while talking to the API: ${err.message}`,
      err
    );
  }
};
function getAnswers() {
  header();
  return inquirer.prompt([
    {
      name: "taskName",
      message: "What is your   N·E·W  task?",
      type: "input",
      validate: (task: string) => {
        if (!task.length) {
          return "Please provide a task";
        }
        if (task.length <= 3 || task.length > 200) {
          return "Please provide a task name between 4 and 200 characters long";
        }

        return true;
      },
      filter: (task: string) => {
        return task.trim();
      },
    },
    {
      name: "ok",
      message: 'Do you want to write another N·E·W  "to do" task?',
      type: "confirm",
    },
  ]);
}

function getEdit() {
  header();
  return inquirer.prompt([
    {
      name: "edit",
      message: 'Do you want to   E·D·I·T  your "to do"?',
      type: "confirm",
    },
  ]);
}
function getOption() {
  header();
  return inquirer.prompt([
    {
      name: "option",
      message: "What edit option do you need for your task?",
      type: "checkbox",
      choices: ["Remove task", "Select your done task"],
    },
  ]);
}

function getExit() {
  header();
  return inquirer.prompt([
    {
      name: "exit",
      message: 'Do you want to E·X·I·T your "to do"?',
      type: "confirm",
    },
  ]);
}

function getDelTask() {
  header();
  return inquirer.prompt([
    {
      name: "id",
      message: "What N·U·M·B·E·R of task do you want to R·E·M·O·V·E?",
      type: "input",
      validate: (id: number) => {
        id = Number(id);
        if (id < 0) {
          return "Please SELECT a valid task";
        }
        if (typeof id !== "number") {
          return "Please PUT A NUMBER TASK";
        }

        return true;
      },
    },
  ]);
}

function getDoneTask() {
  header();
  return inquirer.prompt([
    {
      name: "selectedTask",
      message: "What N·U·M·B·E·R of task do you have D·O·N·E?",
      type: "input",
      validate: (id: number) => {
        id = Number(id);
        if (id < 0) {
          return "Please SELECT a valid task";
        }
        if (typeof id !== "number") {
          return "Please PUT A NUMBER TASK";
        }

        return true;
      },
    },
  ]);
}

runQuestions();
