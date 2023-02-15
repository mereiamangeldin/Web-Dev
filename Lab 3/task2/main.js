window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    let list_el = document.querySelector(".task-list");;


    form.addEventListener('submit', (e) =>{
        e.preventDefault();
        const task = input.value;
        if (!task){
            alert("Введите задачу!");
            return;
        }
        list_el.classList.add("task-list-style");
        const task_el = document.createElement("div");
        task_el.classList.add("task");
        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");
        const task_check_el = document.createElement("input");
        task_check_el.type = "checkbox";
        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_action_el = document.createElement("div");
        task_action_el.classList.add("actions");
        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        // const delete_icon = document.createElement("img");
        // delete_icon.src = "https://cdn-icons-png.flaticon.com/512/3687/3687412.png";
        // delete_icon.classList.add("width: 22px");
        task_delete_el.innerHTML = "<img src=\"https://cdn-icons-png.flaticon.com/512/3687/3687412.png\" style=\"width: 22px\">";
        task_action_el.appendChild(task_delete_el);

        task_el.appendChild(task_check_el);
        task_el.appendChild(task_content_el);
        task_el.appendChild(task_action_el);

        input.value = "";

        task_check_el.addEventListener('change', () =>{
            if(task_check_el.checked){
                task_input_el.classList.add("lineThrough");
            } else{
                task_input_el.classList.remove("lineThrough");
            }
        });

        task_delete_el.addEventListener('click', () =>{
            list_el.removeChild(task_el);
        });


        list_el.appendChild(task_el);
        console.log(list_el);
    });
});