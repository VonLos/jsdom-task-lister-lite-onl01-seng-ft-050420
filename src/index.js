const form = document.getElementById('create-task-form')
const tasks = document.getElementById('tasks')
function toDoAdd(e) {
  let input = e.target.previousElementSibling.value
  let li = document.createElement('li')
  li.innerText = input
  tasks.appendChild(li)
}

function handlebuttonClick(e){
if (e.target.id === "submit"){
      e.preventDefault()
      toDoAdd(e)
  }
}



document.addEventListener("DOMContentLoaded", (e) => {
  form.addEventListener('click', handlebuttonClick)
});
