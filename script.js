let form=document.getElementById("taskForm");
let title=document.getElementById("title");
let description=document.getElementById("description");
let taskList=document.getElementById("taskList");

form.addEventListener("submit",function(event){
    event.preventDefault();

    let task=document.createElement("div");
    task.className="task";

    let h3=document.createElement("h3");
    h3.textContent=title.value;

    let p=document.createElement("p");
    p.textContent=description.value;

    let completeButton=document.createElement("button");
    completeButton.textContent="Mark as completed";

    let editButton=document.createElement("button");
    editButton.textContent="Edit";

    let deleteButton=document.createElement("button");
    deleteButton.textContent="Delete";

    completeButton.addEventListener("click",function(){
        if(completeButton.textContent=="Mark as completed"){
            h3.className="completed";
            p.className="completed";
            completeButton.textContent="Completed";
        }
        else{
            h3.className="";
            p.className="";
            completeButton.textContent="Mark as completed";
        }
    });

    editButton.addEventListener("click",function(){
        if(editButton.textContent=="Edit"){
            let titleInput=document.createElement("input");
            titleInput.value=h3.textContent;

            let descriptionInput=document.createElement("input");
            descriptionInput.value=p.textContent;

            task.replaceChild(titleInput,h3);
            task.replaceChild(descriptionInput,p);

            h3=titleInput;
            p=descriptionInput;

            editButton.textContent="Save";
        }
        else{
            let newTitle=document.createElement("h3");
            newTitle.textContent=h3.value;

            let newDescription=document.createElement("p");
            newDescription.textContent=p.value;

            task.replaceChild(newTitle, h3);
            task.replaceChild(newDescription, p);

            h3=newTitle;
            p=newDescription;

            editButton.textContent="Edit";
        }
    });

    deleteButton.addEventListener("click",function(){
        taskList.removeChild("task");
    });

    task.appendChild(h3);
    task.appendChild(p);
    task.appendChild(completeButton);
    task.appendChild(editButton);
    task.appendChild(deleteButton);

    taskList.appendChild(task);
    
    form.reset();
});