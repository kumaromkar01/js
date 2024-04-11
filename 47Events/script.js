let a = document.getElementsByClassName("container")[0]
a.onclick = () => {
  let b = document.getElementsByClassName("container")[0]
  b.innerHTML = "Hello World!"
}

//events : 
//1 .Mouse Events : click,contextmenu(rightclick), mouseover/mouseout, mouseup/mousedown, mousemove
//2. keyboard : keyup/krydown
//3.form : submit, focus
//4. Document : DOMContentLoaded