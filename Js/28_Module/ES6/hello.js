
export var Hello = "hello"
export var firstName = "Kai"
export let { log } = console;
export function test(){
    return ("Hello World")
}



export default function(){
    console.log("-------Default------");
}


// SyntaxError, Only one default function is allowed
// export default function(){
//     console.log("-------Default222------");
// }