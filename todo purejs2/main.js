let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let task = document.getElementById("content");

form.addEventListener("submit", (e)=>{
    e.preventDefault();
    console.log("hello");
    formvalidate();
});

let formvalidate = ()=>{

    if(input.value === ""){
        msg.innerHTML = "Task cannot be empty";
        console.log("Fail");
    } 
    else{
        console.log("Success");
        msg.innerHTML = "";
        acceptData();
    }

}

let data = {};
let acceptData = ()=>{
    data["temp"] = input.value;
    console.log(data);
    createtask();
};

let createtask = ()=>{
    task.innerHTML += `
        <div id = "sss">
            <p>${data.temp}</p>
            <span class="options">
                <i onClick="editTask(this)" class='fa fa-edit'></i>
                <i onClick="deleteTask(this)" class="fa fa-trash"></i>
            </span>
        </div>
    
    `;

    input.value = ""; 
};

let deleteTask = (r) => {
    console.log("Hello")
    let id = document.getElementById("sss");
    r.parentElement.parentElement.remove(id);
}; 

let editTask = (c)=> {
    let id = document.getElementById("sss");
   input.value = c.parentElement.previousElementSibling.innerHTML;
   c.parentElement.parentElement.remove(id);
};