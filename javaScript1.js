//This is how we do single line comment

// ways to initlize variable
var name1 = "paras";
let name2 = "kumar";
const age = 23;

// use of assingment operator
let x = 10;
x += 10;
x -= 10;
x *= 10;
x /= 10;

let y = 10;
// use of arthimetic  operator
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log(x ** y);
console.log(x++);
console.log(x--);
console.log(x % y);
//use of logical operator
//- &&
//- ||
// - &
// - |

let even = 3;

if (even & 1) console.log("odd");
else {
  console.log("even");
}

// data type in javaSript

let name = "aman"; //String
let agee = 23; //Number
let name22; //Undefined
let male = true; //Boolean
let z = null; // null

//object
let c = {
  y: "h",
};

//function

function add(x = 0, y = 0) {
  return x + y;
}
add(10, 10);
const addd = (x, y) => x + y; // arrow function

addd(20, 20);

let str = "this is a string";

console.log(str.length); //return length of string

// escape character
let str2 = 'this is "another" string';

//string method
console.log(str.slice(0, 2));
console.log(str.substring(2, 6));
console.log(str2.substr(6));
console.log(str.replace(" is ", " are "));
console.log(str.toLowerCase);
console.log(str.concat(" aman"));
let text = "    fhs   ";
console.log(text.trim());
console.log(str.split(" "));

//arrays

let arr = [1, 2, 3, 4];
let arr1 = [1, "aman", true, undefined, [1, 2, 3]]; //array can hold multiple type of value

//array methods
console.log(arr.toString());
console.log(arr.join(" "));
console.log(arr.push(1));
console.log(arr.pop());
console.log(arr.shift());
console.log(arr.unshift(45));
console.log(arr.length);

//splice
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);

//sort method
let arr2 = [2, 3, 1, 4, 1];
console.log(arr2.sort());

arr2.forEach((item) => {
  console.log(item + 1);
});

// USE OF MAP METHOD
console.log(
  arr2.map((item) => {
    return item * 2;
  })
);

// date
let date = new Date();

console.log(date);
console.log(date.getTime());
console.log(date.getFullYear());
console.log(date.getHours());
console.log(Date.now());

let f = 10;
let k = 13;

if (f > k) console.log(f);
else {
  console.log(k);
}

f > k ? f : k;

//loop
//-while
//-for
//-for in
//-for of

const arr4 = ["a", "b", "c"];
for (let i = 0; i < arr4.length; i++) {
  console.log(arr4[i]);
}

for (key in arr4) {
  console.log(key);
}

for (value of arr4) {
  console.log(value);
}
