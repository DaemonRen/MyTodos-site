// Brief specified "working prototype", so fuck styling
// Brief specified "so they can view it on their mobiles", so fuck desktop and tablet

// 1. On click add input form inner.html/value? to newly created li element (with delete button?)
// 2. On press reset, clear all li elements
// add `<li>${newTask__input}</li>`
// 3. if (taskList.innerHTML has stuff in it, or all the li elements checkboxes are ticked) {change taskNumber.innerHTML to "All tasks completed, good job!"}

const resetBtn = document.getElementById("hero_reset-btn")

const taskList = document.getElementById("taskList__list");
const taskText = document.getElementById("newTask__input");
const taskInput = document.getElementById("newTask__input")
const taskSubmit = document.getElementById("newTask__submit-btn");
const taskNumber = document.getElementById("task__number")

let counter = [];
console.log(counter);

const createTask = () => {
    taskList.innerHTML += `<li><input type="checkbox" class="checkBox">${taskInput.value}</li>`
    taskInput.value = "";
    counter++
    console.log(counter);
    if (counter === 0) {
        taskNumber.innerHTML = "Test"
    } else {
        taskNumber.innerHTML = `You have ${counter} tasks left to complete`
    }
};

const clearPage = () => {
    taskList.innerHTML = "";
    counter = [];
    taskNumber.innerHTML = " All tasks completed, good job!"
}

taskSubmit.addEventListener("click", createTask)

resetBtn.addEventListener("click", clearPage)



