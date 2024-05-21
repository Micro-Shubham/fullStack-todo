const express = require("express");
const app = express();
const cors = require("cors");
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
  })
);
app.use(express.json());
let Array = [];
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.json(Array);
});
app.post("/add", (req, res) => {
  console.log("post working")
  let add = {
    title: req.body.title,
    id: Math.floor(Math.random() * 1000),
  };
  Array.push(add);
  res.json({
    mesg: "New task added successfully",
  });
});
//edit route
app.put("/edit", function (req, res) {
  let newId = req.body.id;
  let newTitle = req.body.title;
  for (let i = 0; i < Array.length; i++) {
    if (newId == Array[i].id) {
      Array[i].title = newTitle;
    }
    res.json({
      msg: "New task edited successfully ",
    });
  }
});
//delete route
app.delete("/delete/:id", (req, res) => {
  newArr = [];
  let index = 0;
  let Id = req.params.id;
  for (let i = 0; i < Array.length; i++) {
    if (Array[i].id != Id) {
      newArr[index] = Array[i];
      index++;
    }
  }
  Array = newArr;
  res.json({
    msg: "successfully deleted task",
  });
});
app.listen(3010, () => {
  console.log(`server is listening at port  ${3010}`);
});
