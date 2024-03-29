document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let fom = document.getElementById("create-task-form")
  document.addEventListener('submit', function(e) {
  e.preventDefault()
   let inp = document.querySelector("#new-task-description")
  let p1 =document.createElement("li")
  p1.textContent = `${inp.value} `
  let tod = document.querySelector("#tasks")
  inp.value = ""
  tod.appendChild(p1)
  let btn = document.createElement("button")
  console.log(btn)
  btn.textContent = "x"
  p1.appendChild(btn)
  btn.addEventListener("click",(e) => {
   e.target.parentNode.remove()
  })
  })
});
