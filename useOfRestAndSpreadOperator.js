console.log("use of rest operator : \n");
//so use rest operator

const add = (...argument) => {
  let sum = 0;
  for (let i in argument) {
    sum += argument[i];
  }
  console.log(`sum of ${argument} is : ${sum} \n`);
};
add(2, 3, 6, 4);

//use of spread operator in  object

const obj1 = {
  fname: "aman",
  lname: "kumar",
};

const obj2 = {
  ...obj1, // here obj1 is spread in obj2
  email: "aman@inzint.com",
};

const arr1 = [2, 4, 6, 8];
const arr2 = [...arr1]; // here arr1 is spread into arr2 and arr2 has same vlaue
console.log(...arr1);
