// Syncronous programming
// let a = prompt("What is your name?");
// let b = prompt("What is your age?");
// let c = prompt("What is your favorite color?");
// console.log(a + " is " + b + " years old and has " + c + " favorite color.");

// Asynchronous programming
console.log("Start")
setTimeout(function() {
  console.log("Hey I am good");
}, 3000)
console.log("End")



//blocking code vs nonblocking code
//blocks the flow of prog  vs doesn't blocks
//read file sync   vs read file async