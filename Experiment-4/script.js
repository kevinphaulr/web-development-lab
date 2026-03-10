function pageLoad(){
document.getElementById("result").innerHTML="Enter values";
}

function calculateBMI(){

let w=document.getElementById("weight").value;
let h=document.getElementById("height").value;

if(w && h){

let bmi=w/(h*h);
let type="";

if(bmi<18) type="Underweight";
else if(bmi<=25) type="Normal";
else if(bmi<=30) type="Overweight";
else type="Obese";

document.getElementById("result").innerHTML=
"BMI = "+bmi.toFixed(2)+" ("+type+")";
}
}