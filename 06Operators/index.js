// 77;
// "Harry bhai"
// false

//above mention statements are expression will not give any error on execution

console.log("Operators in Js")
// Arithmetic Operators 
let a = 10;
let b = 4;
console.log("a + b = ", a + b)
console.log("a - b = ", a - b)
console.log("a / b = ", a / b) //it will show accurate result 45/4 will not be 11
console.log("a ** b = ", a ** b)  //45 ** 4 = 45*45*45*45
console.log("a % b = ", a % b) 
console.log("++a = ", ++a)  //it will print as well as increse to 11
console.log("a++ = ", a++)  //it will print 10 but increase a to 11
console.log("--a = ", --a)
console.log("a-- = ", a--)
console.log("a = ", a)
console.log("a-- = ", a--)

//output 11 11 11 11 10 10

// Assignment Operators 
let assignment = 1;
assignment += 5 // same as assignment = assignment + 5
console.log("a is now = ", a)
assignment -= 5 // same as assignment = assignment - 5
console.log("a is now = ", a)
assignment *= 5 // same as assignment = assignment * 5
console.log("a is now = ", a)
assignment /= 5 // same as assignment = assignment / 5
console.log("a is now = ", a)

// Comparison Operators 
let comp1 = 6;
let comp2 = 7;
console.log("comp1 == comp2 is ", comp1 == comp2)
console.log("comp1 != comp2 is ", comp1 != comp2)//will print true
console.log("comp1 === comp2 is ", comp1 === comp2) //same value and data type , will be false if compare "6"
console.log("comp1 !== comp2 is ", comp1 !== comp2)
console.log("comp1 > comp2 is ", comp1 > comp2)

// Logical Operators
let x = 5;
let y = 6;
console.log(x<y && x==5)
console.log(x>y || x==5)
console.log(!false)
console.log(!true)

// Comments
// This is a single line comment
/* This is a sample multiline comment and a tutorial
from 
codewithharry */