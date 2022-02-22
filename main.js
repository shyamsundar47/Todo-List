window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_ele = document.querySelector("#tasks");
/* 
    console.log(form);
    console.log(input);
    console.log(list_ele); */

    form.addEventListener('submit' , function(e){
        e.preventDefault();
        const task = input.value;
        // console.log(task);

        if(!task){
            alert("Please fill out the task !!!");
            return;
        }

        const task_ele = document.createElement("div");
        task_ele.classList.add("task");

        const task_content_ele = document.createElement("div")
        task_content_ele.classList.add("content");
        // task_content_ele.innerHTML = task;

        task_ele.appendChild(task_content_ele);

        const task_input_ele = document.createElement("input");
        task_input_ele.classList.add("text");
        task_input_ele.type = "text";
        task_input_ele.value = task;
        task_input_ele.setAttribute("readonly","readonly");

        task_content_ele.appendChild(task_input_ele);

        const task_actions_ele = document.createElement("div");
        task_actions_ele.classList.add("actions");

        const task_edit_ele = document.createElement("button");
        task_edit_ele.classList.add("edit");
        task_edit_ele.innerHTML ="Edit";

        const task_delete_ele = document.createElement("button");
        task_delete_ele.classList.add("delete");
        task_delete_ele.innerHTML ="Delete";

        task_actions_ele.appendChild(task_edit_ele);
        task_actions_ele.appendChild(task_delete_ele);


        task_ele.appendChild(task_actions_ele);
        list_ele.appendChild(task_ele);
        

        input.value = "";

        
//edit
        task_edit_ele.addEventListener('click' , function(){
            if(task_edit_ele.innerText.toLowerCase() == "edit"){
                task_input_ele.removeAttribute("readonly");
                task_input_ele.focus();
                task_edit_ele.innerHTML = "Save";
            }else{
                task_input_ele.setAttribute("readonly","readonly");
                task_edit_ele.innerText = "Edit";
            }
        });

//delete
        task_delete_ele.addEventListener('click' ,function(){
           list_ele.removeChild(task_ele); 
        });




    });
});