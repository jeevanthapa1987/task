console.log(window.document);
console.dir(window.document.querySelector("button"));

var btn = window.document.querySelector("button").textContent;
console.dir(btn);

var tasksToDoEl = document.querySelector("#tasks-to-do");


var buttonEl = document.querySelector("#save-task");

console.log(buttonEl.addEventListener("click", function() {
  var taskItemEl = document.createElement("li");
  taskItemEl.textContent = "hello";
  tasksToDoEl.appendChild(taskItemEl);
  taskItemEl.className = "task-item";
  taskItemEl;
  alert("button clicked");
}));


