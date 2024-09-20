//  accessing DOM element
// element selector |tag name selector

console.log(document.getElementsByTagName("h1"));

// class selector
console.log(document.getElementsByClassName("test"));

// ID selector
console.log(document.getElementById("demo"));

// manipulate the DOM element

// change style
document.getElementsByTagName("h1")[0].style.color = "blue";
document.getElementById("demo").style.color = "red";
// document.getElementsByClassName("test").style.color = "green";

// change to text content
document.getElementById("paragraph").innerText =
  "updated p content with inner text";
document.getElementById("paragraph").textContent =
  "updated p content with inner text";

document.getElementById("paragraph").innerHTML =
  "<h1>updated p content with inner text </h1>";

//   handling DOM elements
document.getElementById("click-me").onclick = function () {
  alert("hello");
};

// JS variables
// document.getElementById('output')
// variable delecration

//1.automatically
x = 1;
document.getElementById("output").textContent = x;

// 2.using var
var y = 2;
document.getElementById("output").textContent = y;

var name = "dented code ";
document.getElementById("output").textContent = name;

//3.using let
let z = 100;
document.getElementById("output").textContent = z;

// using constant
const k = "a";
document.getElementById("output").textContent = "a";

x = 5;
y = 6;

document.getElementById("out").textContent = x * y;

var x = 10;
var y = 6;

document.getElementById("out1").textContent = x - y;

const a = "a";
const b = "b";
document.getElementById("out2").textContent = "a" + "b";

let c = 10;
let d = 4;
document.getElementById("out3").textContent = c / d;

let num1 = 20;
let num2 = 3;
num3 = num1 % num2;
document.getElementById("out4").textContent = num3;

// DATA TYPES
//string
const name2 = "dented";
const city = "sydney";
const gender = `Male`;
const language = String(1);
document.getElementById("output").textContent = name2.length;

//number
const num6 = 100;
var num4 = 5.5;
const frac = 3 / 4;
const num5 = -23;
const bigNum = 1365377817688899889876736467;
const num = Number("12");

document.getElementById("output").textContent = typeof num4;

//Boolean
const bool1 = false;
const bool2 = true;
const bool3 = 1 === 1;

document.getElementById("output").textContent = typeof bool1;

//UNDEFINED
var hari;
const stupied = undefined;
document.getElementById("output").textContent = typeof stupied;

//null type
let stupid2 = null;
document.getElementById("output").textContent = typeof stupid2;

//symbol
let id = Symbol("id");
document.getElementById("output").textContent = typeof id;

//REFERENCE
// Array         Arrya Index
const groccery = ["apple", " milk", "egg", "rice", "bread", "pulse"];
document.getElementById("output").textContent = typeof groccery;

const random = [1, 2, false, "hello", ["hi"]];
document.getElementById("output").textContent = random;

// Arrya Index
document.getElementById("output").textContent = groccery[0];

//Objects--key value pair
const obj1 = { name: "mahesh", age: 22, address: "newtown", 1: "hello" };
document.getElementById("output").textContent = obj1.address;

const books = { name: "javascript", pages: 100, writer: "JS", date: 2019 };
document.getElementById("output").textContent = books.writer;

//date
//math
console.log(Math.randon());
