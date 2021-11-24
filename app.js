// 1. On click add input form inner.html/value? to newly created li element (with delete button?)
// 2. On press reset, clear all li elements
// add `<li>${newTask__input}</li>`

const resetBtn = document.getElementById("hero_reset-btn")

const taskList = document.getElementById("taskList__list");
const taskText = document.getElementById("newTask__input");
const taskInput = document.getElementById("newTask__input")
const taskSubmit = document.getElementById("newTask__submit-btn");
const taskNumber = document.getElementById("task__number")

const createTask = () => {
    taskList.innerHTML += `<li>${taskInput.value}</li>`
    taskInput.value = "";
};

const clearPage = () => {
    taskList.innerHTML = ""
}

taskSubmit.addEventListener("click", createTask)

resetBtn.addEventListener("click", clearPage)

// if (taskList.innerHTML != "") {
//     taskNumber.innerHTML = "Test"
// }

