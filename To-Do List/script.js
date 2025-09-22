function addTask(){
    const task=document.getElementById("taskInput");
    const taskText=task.inputMode.trim();

    if(taskText !== ""){
        const ul=document.getElementById("todolist");
        const li=document.createElement("li");
        const span=document.createElement("span");
        span.textContent=taskText;


        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        ul.appendChild(li);
        task.value = "";

    }
    else{
        alert("Please enter a valid task");
    }

}
