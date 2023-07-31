
Creacion del cli:

npm init -y
npm install -S chalk figlet
npm install @types/node typescript --save-dev
npm i --save-dev @types/clear
npm i --save-dev @types/figlet
npm i --save-dev @types/inquirer
npm install @inquirer/prompts
npm i node-json-db
npm i fs

creacion de tsconfig.json:

{
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "strict": true,
    "target": "es6",
# eliminamos:    "module": "commonjs",
    "sourceMap": true,
    "esModuleInterop": true,
    "moduleResolution": "node"
  }
}

incluir en el package.json:

#  "type": "module",
 "scripts": {
#   "build": "npx tsc", 
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],