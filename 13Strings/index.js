let name = "Harry"
// console.log(name.length)
console.log(name.charAt(0));
console.log(name[1])
let friend = 'Prakash'
console.log(friend)
// let myfriend = "Shubh' // Dont do this
// console.log(myfriend)

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"
// Nikhil is a friend of Pramod
let sentence = `${boy2} is a friend of ${boy1}`  //ye ` backtick me hai 
//we can directly insert variable in template literal this is called string interpolation.
console.log(sentence)

// Escape Sequence Characters
// let fruit = 'Bana\'na'
// console.log(fruit)
// can also use \n or \t in between
let fruit = "Bana\"na"
console.log(fruit)