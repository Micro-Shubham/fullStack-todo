const express = require("express");
const app = express();
app.use(express.json());
let Array = [
  {
    title: "Picnic",
    id: 1,
  },
];
// respond with "hello world" when a GET request is made to the homepage
app.get("/", (req, res) => {
  res.json(Array);
});
app.post("/add", (req, res) => {
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
app.listen(3000);
