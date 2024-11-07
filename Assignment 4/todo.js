const newItemForm = document.getElementById("create-todo");
const inputField = document.querySelector("input");
const todoOutput = document.getElementById("output");
const statusElement = document.getElementById("status");

let tasksDOM = document.getElementsByClassName("todo");

let tasks = [];

inputField.focus();

const setStatus = () => {
  statusElement.innerHTML = tasks.length == tasks.filter(todo => todo.completed).length ? "All tasks completed!" : `${tasks.filter(todo => todo.completed).length}/${tasks.length} completed`;
}

const addTask = e => {
  e.preventDefault();

  tasks = [{
    name: inputField.value,
    completed: false
  }, ...tasks];

  todoOutput.innerHTML = tasks.map(todo => `<li><form class="todo"><input type="checkbox" ${todo.completed && "checked"}><label>${todo.name}</label></form></li>`).join("");
  tasksDOM = document.getElementsByClassName("todo");

  Array.from(tasksDOM).map((taskElement, index) => {
    taskElement.addEventListener("change", e => {
      tasks[index].completed = e.target.checked;
      taskElement.querySelector("label").innerHTML = tasks[index].completed ? tasks[index].name.strike() : tasks[index].name;
      setStatus();
    });
  });

  setStatus();

  inputField.value = "";
}

newItemForm.addEventListener("submit", addTask);

