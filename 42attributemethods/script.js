let first = document.getElementById("first");
let a = first.getAttribute("class")
// console.log(a)
// console.log(first.hasAttribute("class"))
// console.log(first.hasAttribute("style"))
// first.setAttribute("hidden", "true")
// first.setAttribute("class", "true sachin")
// first.removeAttribute("class")
// console.log(first.attributes)

////you can create a custom attribute using data-<> then it will be accessible as id.datased.<>
console.log(first.dataset)
console.log(first.dataset.game)
console.log(first.dataset.player)