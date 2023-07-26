###Install node-typescript-jest

```npm init -y
```npm install --save-dev typescript
```npx tsc --init

---
#En tsconfig.json:
{
 "compilerOptions": {
  "target": "es5",
   "module": "commonjs",
   "outDir": "./dist",
   "rootDir": "./src",
   "strict": true,
   "noImplicitAny": true,
   "strictNullChecks": true,
   "esModuleInterop": true,
   "skipLibCheck": true,
   "forceConsistentCasingInFileNames": true
},
 "exclude": [
   "node_modules",
   "**/*.spec.ts"
  ]
}
---

#En package.json:
---
"scripts": {
   "build": "tsc --build tsconfig.json",
   "build:watch": "tsc --build tsconfig.json --watch"
},
---

```npm install --save-dev jest ts-jest @types/jest

#Creamos jest.config.js con:
---
module.exports = {
 roots: [
   "<rootDir>/src"
 ],
 testMatch: [
   "**/__tests__/**/*.+(ts|tsx|js)",
   "**/?(*.)+(spec|test).+(ts|tsx|js)"
 ],
 transform: {
   "^.+\\.(ts|tsx)$": "ts-jest"
 },
 collectCoverageFrom: [
   "**/*.{js,jsx,ts,tsx}",
   "!**/*.d.ts",
   "!**/node_modules/**",
 ],
 globals: {
   "ts-jest": {
     tsconfig: "tsconfig.json",
   },
 },
}
---

#En package.json:
---
"test": "jest --coverage"
---

###https://www.youtube.com/watch?v=v2GKt39-LPA&t=74s