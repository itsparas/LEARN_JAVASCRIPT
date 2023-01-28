// question 1

// let str = "Hi Inzint I am Jhon js";
// let ans = str.split(" ");
// ans.reverse();
// console.log(ans.join(" "));

//question 2

// function getfib(n, a, b) {
//   if (n === 0) {
//     return;
//   }
//   c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
//   getfib(--n, a, b);
// }
// console.log(0);
// console.log(1);
// getfib(5, 0, 1);

//question 3

// output of this question will be "3 3 3" i.e three times "3" because even if the timer is 0 in settimeout , javascript compiler will still put the operation on eventloop and in the mean time the will will run and thw value of will increase and when these operation will come in call stack the value of i will be 3 that why it will print 3 three times as result

//question 4

// let arr = [21, 21, 45, 89, 64, 56, 56, 89, 56, 67];

// let arr2 = arr.filter((item, index) => {
//   return arr.indexOf(item) === index;
// });
// console.log(arr2);

//question 6

// let list1 = ["noodles", { list: ["eggs", "flour", "water"] }];

// let [a, b] = list1;
// let { list } = b;
// let ans = [a, ...list];
// console.log(ans);

//question 7

//use of call() : it is used to borrow methods of other object and it receives argument seperately(not in an array)
// let obj = {
//   getName(salution) {
//     return salution + " " + this.name;
//   },
// };

// let obj1 = {
//   name: "aman kumar",
// };

// console.log(obj.getName.call(obj1, "mr"));

//use of bind() : it is similar to call() but it receive arguments as an array

// let obj = {
//   getName(salution) {
//     return salution[0] + " " + this.name;
//   },
// };

// let obj1 = {
//   name: "aman kumar",
// };

// console.log(obj.getName.apply(obj1, ["mr"]));

//use of bind() : it is used to preconfig. a method with an object and it returns a preconfigured function bind together with the objet passed in its argument.

// let obj = {
//   getName(salution) {
//     return salution + this.name;
//   },
// };

// let obj1 = {
//   name: "aman kumar",
// };

// const namex = obj.getName.bind(obj1, "mr ");
// console.log(namex());

//question 8

// let callback = (value) => {
//   if (value) {
//     console.log("hi i am a callback");
//   }
// };

// let promise = (value) => {
//   let pr = new Promise((resolve, reject) => {
//     if (value) {
//       resolve("i am promise and resolved");
//     }
//     reject("i am promise and rejected");
//   });
//   return pr;
// };

// //callback is called here
// function check() {
//   setTimeout(() => {
//     callback(true);
//   }, 0);
// }

// //promise is called here
// function check2() {
//   let response = promise(true);
//   response.then((data) => console.log(data));
// }

// check();
// check2();

//question 9
//Event Loop : it is a place where all the asynchronous operation are done or we can say function which cannot be executed immediatly or function like setTimeout they are not executed immedietly so javascript compiler send these function to event loop to wait or to do operation like fetching,file related operation which require. it is good to use event loop when we fetch data from server or operation related to file like reading or writing.

//question 10
//five  string methods
// let str = "i am aman kumar";

// console.log(str.toLowerCase());
// console.log(str.replace(" am ", " is "));
// console.log(str.concat(" i am concatinated"));
// console.log(str.includes("am"));
// console.log(str.split(" "));

//Five array Method
// let arr = [2, 4, 6, 3, 5];

// console.log(arr.toString());

// console.log(arr.join("$"));

// console.log(
//   arr.filter((i) => {
//     return i % 3 ? 0 : i;
//   })
// );

// console.log(
//   arr.map((i) => {
//     return i * 2;
//   })
// );

// console.log(
//   arr.reduce((sum, i) => {
//     return (sum += i);
//   }, 0)
// );

//question 11
// let arr = [2, 1, 7, 4, 9, 4];

//we can use bubble sort to sort it in deascending order
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] < arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// we can use inbuilt methods to sort

// arr.sort();
// arr.reverse();
// console.log(
//   `greatest number is ${arr[0]} and smallest number is ${
//     arr[arr.length - 1]
//   } and arr is ${arr}`
// );

//question 12

//constructor function are special function used to create object dynamically

// function student(fname, lname, age) {
//   this.fname = fname;
//   this.lname = lname;
//   this.age = age;
//   this.fullname = function () {
//     return fname + " " + lname;
//   };
// }

// let student1 = new student("aman", "kumar", "23");

// console.log(student1);
// console.log(student1.fullname());

//question 13

// let stack_1 = [];
// let stack_2 = [];

// let enqueue = (item) => {
//   stack_1.push(item);
// };

// let dequeue = () => {
//   if (stack_2.length === 0) {
//     if (stack_1.length === 0) {
//       console.log("dequeue is not possible");
//     } else {
//       while (stack_1.length !== 0) {
//         let temp = stack_1.pop();
//         stack_2.push(temp);
//       }
//       console.log(stack_2.pop());
//     }
//   } else {
//     console.log(stack_2.pop());
//   }
// };
// enqueue(1);
// enqueue(2);
// enqueue(3);
// dequeue();
// dequeue();
// dequeue();
// enqueue(4);
// dequeue();
