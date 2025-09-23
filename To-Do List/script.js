function addTask(){
    const task=document.getElementById("taskInput");
    const taskText=task.value.trim();

    if(taskText !== ""){
        const ul=document.getElementById("todolist");
        const li=document.createElement("li");
        const span=document.createElement("span");
        span.textContent=taskText;

        const editButton=document.createElement("button");
        editButton.textContent="Edit";
        editButton.onclick=()=>editTask(span);

        const deleteButton=document.createElement("button");
        deleteButton.textContent="Delete";
        deleteButton.onclick=()=>removeTask(li);
        
        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

        ul.appendChild(li);
        task.value = "";

    }
    else{
        alert("Please enter a valid task");
    }

}
function editTask(span){
    const newTask=prompt("Enter new task");
    const newTaskText=newTask.trim();
    if(newTaskText !== ""){
        span.textContent=newTaskText;
    }
}
function removeTask(li){
    const deleteTask=document.getElementById("todolist");
    deleteTask.removeChild(li);

}
