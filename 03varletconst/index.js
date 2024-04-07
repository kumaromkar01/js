console.log("JavaScript tutorial 3: var, let and const")
// var a = 45;
// var a = "p"
let b = "Harry";
const author = "Harry"
author = 5 // Throws an error because constant cannot be changed
b = 4
const harry = 0;
let c = null
let d  = undefined  
{
  let b = 'this'
  console.log(b) // yeh ander wala change karega
}
console.log(b) //yeh bahar wala print karega

//var stores globally while let and const locally
//var can redeclared but let can't