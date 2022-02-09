const path = require("path");
const express = require("express");
const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use(express.static("styles"));

app.engine("html", require("ejs").renderFile);
app.set("views", __dirname + "/" + "views");

app.get("/", function (req, res) {
  res.set("content-type", "text/html");
  res.render("bmi.html");
});

app.post("/", function (req, res) {
  var height = parseInt(req.body.height);
  var weight = parseInt(req.body.weight);
  const bmi = (weight / (height * height)) * 703;
  
  console.log(weight);
  res.render("./new.html", {
    result: `Your BMI Result is:` + bmi
    
  });
});

//For the port 3000
app.listen(3000, function () {
  console.log("server started on port 3000");
});
