// import { Hello, firstName, log, test as new_name} from "./hello.js"

// npm install -g babel-cli
// npm install -D babel-preset-env
//babel-node --presets env index1.js

// console.log(Hello)
// console.log(firstName)

// log(new_name())


import * as Myhello from "./hello.js"

let new_name = Myhello.test;

Myhello.log(new_name())


//Used for default function
import Custom_Name from "./hello.js"
Custom_Name()