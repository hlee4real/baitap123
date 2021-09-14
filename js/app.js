// function createNewTask(){
//     alert('you have just clicked on add button');
// }

var addButton = document.getElementsByTagName('button')[0];
var taskInput = document.getElementById('new-tasks');
var incompleteTasksHolder = document.getElementById('incomplete-tasks');
var completedTasksHolder = document.getElementById('completed-tasks');
function createNewTaskElement(taskString){
    var listItem = document.createElement("li");
    var checkBox = document.createElement("input");
    var label = document.createElement("label");
    var editInput = document.createElement("input");
    var editButton = document.createElement("button");
    var deleteButton = document.createElement("button");

    checkBox.type = "checkbox";
    editInput.type ="text";
    editButton.innerText ="EDIT";
    editButton.className = "edit";
    deleteButton.innerText ="DELETE";
    deleteButton.className = "delete";
    label.innerText = taskString;
    
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);

    return listItem;
}
var taskCompleted = function(){ //đánh dấu task đã hoàn thành

}
var bindTaskEvent = function(taskListItem, checkBoxEventHandler){ //
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    editButton.onclick = editTask;
    deleteButton.onclick = deleteTask;
    checkBox.onchange = checkBoxEventHandler;
}
var deleteTask = function(){
    var listItem = this.parentNode; // list item muốn xoá [chưa xong]
    var ul = listItem.parentNode;
    ul.removeChild(listItem);
}
var editTask = function(){
    var listItem = this.parentNode;
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    var button = listItem.getElementsByTagName('button')[0];

    var containsClass = listItem.classList.contains("editMode");
    if(containsClass){
        label.innerText = editInput.value;
        button.innerText = "Edit";
    }else{
        editInput.value = label.innerText;
        button.innerText = "Save";
    }
    listItem.classList.toggle("editMode");
}
function addTask(){
    var listItemName = taskInput.value || "New Item";
    var listItem = createNewTaskElement(listItemName);
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvent(listItem, taskCompleted);
}
var taskCompleted = function(){
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvent(listItem, taskCompleted);
}
addButton.addEventListener("click", addTask);