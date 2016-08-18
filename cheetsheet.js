// examples of variables
var x = 10;
var y = 20;
var kamila = "Happy";
var lastName = "Dottin";

//Write 3 different functions that take input and return something via console or an alert
//Debugging alerts, comments, the console)
alert("Hi there!");

prompt("how are you?");

console.log("My name is " + kamila + " " + lastName);

console.log(x + y);

//Different data types
//number, strings, arrays, object

23 // number
"AneLou"  //string
["BMW","Mercedes","Telsa"] //array

//Declare a function that takes the first name last name as arguments and combines them in a full name alert.
var array = {firstName:"Nate", lastName:"Bred"} //object


//testing
if (2-2 == 0) {
  console.log('true');
  } else {
    console.log('false');
  } //true


//logic
if (2-2 === "0") {
  console.log('true');
} else {
  console.log('false');
}

if (96 > 95  && 5 == "5"){
  console.log('true');
} else {
  console.log('false');
}; 

 //Functions
function dreamTeam(a, b){
  return a * b;
}
console.log(dreamTeam(5, 5));  

function brooklynFord(x,y){
  return x / y;
}
console.log(brooklynFord(5,5));

//Create an multi-functional array with things that intrest you. Output two of the sub-arrays into the console

var designer = ["Chanel","CoCo"];
var quotes = ["Karl", "Kaiser"];
var favorites = ["designer", "quotes"];


//write a script and check if the variable is greater than 10. If it is, alert the user that their user is greater than 10, if not, alert the user of the difference (their variable - 10)

var apple = prompt('pick a number');

if (apple > 10) {
  alert("Your number is greater than 10!");
} else {
  alert( apple - 10 );
}
