let x = function(event) {
  console.log(event.target) //mtlb wo element jis pe event hua hai
  console.log(event.type, event.clientX, event.clientY) //clientX aur clientY btayega khan click kiya user ne 
  // alert("Hello World1!")
}

let y = function(e) {
  console.log(e)
  alert("Hello World2!")
}

btn.addEventListener('click', x)


// btn.addEventListener('click', y)

// let a = prompt("What is your favorite number?");


// if (a == "2") {
//   btn.removeEventListener('click', x)
// }

//// removeEventListener tabhi kam karega jb function object same ho
//// mtlb function hi lekhoge x ki jagah toh koi fayeda nhi