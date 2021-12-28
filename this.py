var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");


console.log(buttonEl.addEventListener("click", function() {
    alert("button clicked");
    var taskItemEl = document.createElement("li");
    taskItemEl.textContent = "hello";
taskItemEl;
tasksToDoEl.appendChild(taskItemEl);
taskItemEl.className = "task-item";
  }));

  buttonEl.addEventListener("click", function() {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";
  listItemEl.textContent = "This is a new task.";
  tasksToDoEl.appendChild(listItemEl);
});
