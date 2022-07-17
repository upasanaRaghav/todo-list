const express = require("express");
const bodyParser = require("body-parser")
//const request = require("request");
const app = express();
let items=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extented:true}));

app.use(express.static("public"));
app.get("/", function(request, response) {
  let today= new Date();
let options={
weekday: "long",
day:"numeric",
month: "long"
};
let day= today.toLocaleDateString("en-US" , options)
response.render("list", {kindofDay: day, newListItems:items});

});

app.post("/", function(req,res){
let item= req.body.newItem;
items.push(item)
res.redirect("/")

})

  //var currentDay= today.getDay();
  //better method than switch statements
// switch(currentDay){
//   case 0:
//   day= "Sunday";
//   break;
//
//   case 1:
//   day= "Monday";
//   break;
//   case 2:
//   day= "Tuesday";
//   break;
//   case 3:
//   day= "Wednesday";
//   break;
//   case 4:
//   day= "Thursday";
//   break;
//   case 5:
//   day= "Friday";
//   break;
//   case 6:
//    break;
//   default:
//   console.log("Error:current Day is" + currentDay);


  // if(currentDay===6 || currentDay===0){
  //   day="Weekend";
  //   // response.sendFile(__dirname + "/weekend.html");
  //
  // } else{
  //   day="Weekday";
  //   // response.sendFile(__dirname + "/weekday.html");
  // }

app.listen(3000, function() {
  console.log("server is running");
});
