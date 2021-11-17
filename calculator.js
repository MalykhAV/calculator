const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){ // localhost:3000
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){
    
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("The result of the calculation is " + result);
});
app.get("/bmicalculator", function(req, res){ // localhost:3000/bmicalculator
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req,res){ 
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / ((height / 100) * (height / 100));
    if(bmi < 18.5) {
        res.send("Your BMI is " + bmi + ". Underweight");
    } else if (bmi > 18.5 && bmi <= 24.9) {
        res.send("Your BMI is  " + bmi + ". Normal weight");
    } else if (bmi > 25 && bmi <= 29.9) {
        res.send("Your BMI is " + bmi + ". Overweight");
    }
    else {
        res.send("Your BMI is " + bmi + ". Obesity");
    }
     
})
app.listen(3000, function(){
    console.log("Server is running on port 3000");
});