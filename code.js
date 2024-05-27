function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");
    
    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }
    
    var li = document.createElement("li");
    
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    
    var span = document.createElement("span");
    span.textContent = taskInput.value;
    
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function() {
        taskList.removeChild(li);
    };
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    
    taskList.appendChild(li);
    
    taskInput.value = "";
}

