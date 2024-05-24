// const { listenerCount, listeners } = require("process");

let btn = document.getElementById("add-todo");
let title = document.getElementById("input-todo");
let container = document.getElementById("todo-container");
// array for storing data
// let dataArray = [];

  getAllData();
//click function
btn.addEventListener("click", () => {
  // addTodo(title.value);
  postData(title.value);
  title.value = "";
});

// function addTodo(title) {
// let id = Math.floor(Math.random() * 10000 + 1);
// localStorage.setItem(id, title);
// let object = {
//   title: title,
//   id: id,
// };
// postData(object.title, object.id);
// dataArray.push(object);
// render(dataArray);
// }

// function render(Array) {
//   container.innerHTML = "";
//   // for (let i = 0; i < Array.length; i++) {
//   // let list = Array[i].title;
//   let list = Array.title;
//   let create = document.createElement("p");
//   create.innerHTML = list;
//   // create.id = todo[i].id;
//   container.append(create);
//   // }
// }

container.addEventListener("click", (e) => {
  let ptag = e.target.id;
  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id == ptag) {
      localStorage.removeItem(ptag);
      deleteTodo(ptag);
      deleteData(ptag);
    }
  }
});

function deleteTodo(id) {
  let arry = [];
  let index = 0;
  deleteData(id);

  for (let i = 0; i < dataArray.length; i++) {
    if (dataArray[i].id != id) {
      arry[index] = dataArray[i];
      index++;
    }
  }
  dataArray = arry;

  render(dataArray);
}

function getAllData() {
  const apiUrl = "http://localhost:3010/";

  // Make a GET request
  fetch(apiUrl)
    .then((response) => response.json())
    .then((Array) => {
      container.innerHTML = "";
      Array.forEach((item) => {
        let list = item.title;
        let listItem = document.createElement("p");
        listItem.innerHTML = list;
        listItem.id = item.id;
        container.appendChild(listItem);
      });
    })
    .catch((error) => {
      console.log("error fetching data: ", Array);
    });
  // .then((response) => {
  //   if (!response.ok) {
  //     throw new Error("Network response was not ok");
  //   }
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // })
  // .catch((error) => {
  //   console.error("Error:", error);
  // });
}
//post request
function postData(title) {
  fetch("http://localhost:3010/add/", {
    method: "POST",
    body: JSON.stringify({
      title: title,
      // id:
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      console.log(getAllData());
    });
}

//fetch delete
async function deleteData(id) {
  try {
    const url = `http://localhost:3010/del/${id}`;
    console.log(id);
    const response = await fetch(url, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error(`Error with Status Code: ${response.status}`);
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
