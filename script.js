var nickname;
var height;
var weight;

nickname = prompt ("What is your name?",0); 
height = prompt ("What is your height in inches?",0);
weight = prompt ("What is your weight in kilograms?", 0);

var feet = Math.floor (height /12);
var inch = (height % 12);
var heightft = (feet +"'" + inch);
var weightlbs = (weight * 2.2)
alert ("Name: " + nickname + "\nHeight: " + heightft + "\nWeight: " + weightlbs. toFixed(1) + " lbs");