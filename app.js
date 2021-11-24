// 1. On click add input form inner.html/value? to newly created li element (with delete button?)
// 2. On press reset, clear all li elements
// add `<li>${newTask__input}</li>`

const taskList = document.getElementById("taskList__list");
const taskText = document.getElementById("newTask__input");
const taskInput = document.getElementById("newTask__input")
const taskSubmit = document.getElementById("newTask__submit-btn");
const taskNumber = document.getElementById("task__number")

const createTask = () => {
    taskList.innerHTML += `<li>${taskInput.value}</li>`
};

taskSubmit.addEventListener("click", createTask)

// if (taskList.innerHTML != "") {
//     taskNumber.innerHTML = "Test"
// }

