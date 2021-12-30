var formEl = document.querySelector("#task-form");

//var buttonEl = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#tasks-to-do");

//buttonEl.addEventListener("click", function() {
  var createTaskHandler=function(event){

    event.preventDefault();
    var taskNameInput = document.querySelector("input[name='task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;


    //console.log(taskNameInput);   
    console.dir(taskNameInput);
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

  // create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
// give it a class name
taskInfoEl.className = "task-info";
// add HTML content to div
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";

listItemEl.appendChild(taskInfoEl);

  //listItemEl.textContent = "This is a new task.";
 // listItemEl.textContent = taskNameInput;
  tasksToDoEl.appendChild(listItemEl);
}
//});
//buttonEl.addEventListener("click", createTaskHandler);
formEl.addEventListener("submit", createTaskHandler);