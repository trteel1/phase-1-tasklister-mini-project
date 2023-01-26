document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTaskDescription = document.querySelector(`#new-task-description`)
  const form = document.querySelector('form')
  form.addEventListener('submit', (e) => {
    e.preventDefault()
    toDoTask(newTaskDescription.value)
    form.reset()
  })
  


function toDoTask(task){
  const listItems = document .createElement(`li`)
  listItems.textContent = `${task}`
  const btn = document.createElement('button')
  btn.textContent = " x"
  btn.addEventListener('click', (e)=>{
    e.target.parentNode.remove()
  })
  document.querySelector('#tasks').appendChild(listItems).appendChild(btn)
}