const taskForm = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

taskForm.addEventListener("submit", (event) => {
    event.preventDefault();

    addTask();
    taskInput.value = "";
});

const addTask = () => {
    const li = document.createElement("li");

    const textDiv = document.createElement("div");
    textDiv.textContent = taskInput.value;
    textDiv.classList.add("task-text");
    li.appendChild(textDiv);

    const actiondiv = document.createElement("div");
    actiondiv.classList.add("task-actions");
    li.appendChild(actiondiv);

    taskList.appendChild(li);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", () => {
        taskList.removeChild(li);
    });
    actiondiv.appendChild(deleteBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");
    editBtn.addEventListener("click", () => {
        const newTask = prompt("Edit your new task: ");

        li.firstChild.textContent = newTask;
    });
    actiondiv.appendChild(editBtn);

    const completeCheckBox = document.createElement("input");
    completeCheckBox.type = "checkbox";
    completeCheckBox.addEventListener("change", () => {
        if(completeCheckBox.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
    });
    actiondiv.appendChild(completeCheckBox);


};