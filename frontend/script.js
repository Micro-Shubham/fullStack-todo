let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");
let container = document.getElementById("todo-container").innerHTML;

// array for storing data
let dataArray = [];

//click function 
btn.addEventListener("click", () => {
let value= title.innerHTML;
addTodo(value);
});

function addTodo (value) {
    dataArray.push(value);
render(dataArray);
}

function render(todo) {
    for(let i=0;i<todo.length;i++) {
    let list = todo[i];
     let create = document.createElement("div");
     create.innerHTML = list;
     container.appendchild(create);
    }
}


