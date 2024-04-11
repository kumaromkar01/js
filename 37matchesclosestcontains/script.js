let id1 = document.getElementById("id1")
let sp1 = document.getElementById("sp1")
console.log(id1)
console.log(id1.matches(".class")) //prints false
console.log(id1.matches(".box")) //prints true;
console.log(sp1.closest("#sp1"))   //check if given css selector matches with corrent element or its parent
console.log(id1.contains(sp1)) 
console.log(sp1.contains(sp1))
console.log(sp1.contains(id1)) //true if sp1 contains id1