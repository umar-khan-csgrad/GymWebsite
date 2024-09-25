// The BMR Section of the website Starts Here!

var BMRgivenHeight = document.getElementById("BMRheight");
var BMRmainWeight = document.getElementById("BMRweight");
var BMRmainAge = document.getElementById("BMRage");

function BMRheightValueFunc() {
    if (BMRheightValue.value == "inch") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in inch)");
    } else if (BMRheightValue.value == "cm") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in centimeter)");
    } else if (BMRheightValue.value == "meter") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in meter)");
    }
}

function BMRcalc() {
    var BMRmainHeight;
    if (BMRheightValue.value == "inch") {
        BMRmainHeight = BMRgivenHeight.value * 2.54;
    } else if (BMRheightValue.value == "cm") {
        BMRmainHeight = BMRgivenHeight.value;
    } else if (BMRheightValue.value == "meter") {
        BMRmainHeight = BMRgivenHeight.value * 100;
    }
    var BMRres;
    var BMRgenderValue = document.getElementById("BMRgenderValue");
    var BMRgoalValue = document.getElementById("BMRgoalValue");
    if (BMRgenderValue.value == "female") {
        var BMRdiboWeight = BMRmainWeight.value * 9.6
        var BMRdiboHeight = BMRmainHeight * 1.8
        var BMRdiboAge = BMRmainAge.value * 4.7
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 655;
        if(BMRgoalValue.value=="fatLoss"){
            BMRres=(1.5*BMRres)-500
        }
        else
        if(BMRgoalValue.value=="muscleGain"){
            BMRres=(1.5*BMRres)+500
        }
        else
        if(BMRgoalValue.value=="leanGain"){
            BMRres=(1.5*BMRres)+200
        }
    } else if (BMRgenderValue.value == "male") {
        var BMRdiboWeight = BMRmainWeight.value * 13.7
        var BMRdiboHeight = BMRmainHeight * 5
        var BMRdiboAge = BMRmainAge.value * 6.8
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 66;
        if(BMRgoalValue.value=="fatLoss"){
            BMRres=(1.5*BMRres)-500
        }
        else
        if(BMRgoalValue.value=="muscleGain"){
            BMRres=(1.5*BMRres)+500
        }
        else
        if(BMRgoalValue.value=="leanGain"){
            BMRres=(1.5*BMRres)+200
        }
    }
    BMRresInt = BMRres
    BMRres = BMRres.toString();

    if (BMRres == "NaN" || BMRres == "0" || BMRres == "66" || BMRres == "655") {
        document.getElementById("BMRres").innerHTML = "<h5>Please Enter Valid Information.</h5>";
        window.alert("Please enter valid information.\nWithout giving valid information, The site will not work.\nHope you understand it.");
    } else {
        BMRres = BMRresInt.toFixed(3);
        var all = `<h5>Your Required Calories is ${BMRres}</h5>`;
        document.getElementById("BMRres").innerHTML = all;
    }
}

