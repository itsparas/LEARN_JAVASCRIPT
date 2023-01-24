console.log("Object Destructuring : \n");

const obj = {
  fname: "aman",
  lname: "kumar",
  email: "itskparas@gmail.com",
};

let { fname, ...rest } = obj;

console.log("fname : ", fname, "\n");
console.log(rest);

console.log("Array Destructuring : \n");

const arr = [1, 2, 3, 4, 4, 5];

const [a, b, ...arr2] = arr;

console.log("arr : ", arr, "\n");
console.log("arr : ", ...arr, "\n");
console.log("a and b : ", a, b, "\n");
console.log("arr2 : ", arr2);
