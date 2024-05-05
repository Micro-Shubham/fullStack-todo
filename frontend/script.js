let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");
let container = document.getElementById("todo-container");
// array for storing data
let dataArray = [];

//click function
btn.addEventListener("click", () => {
  addTodo(title.value);
  title.value= "";
});

function addTodo(title) {
  let id = Math.floor(Math.random()*10000+1);
  let object = {
    Title : title,
    Id : id,
  };
  dataArray.push(object);
  render(dataArray);
}

function render(todo) {
    container.innerHTML ="";
  for (let i = 0; i < todo.length; i++) {
    let list = todo[i].Title;
    let create = document.createElement("p");
    create.innerHTML = list;
    create.id = todo[i].Id;
    container.append(create);
  }
}



