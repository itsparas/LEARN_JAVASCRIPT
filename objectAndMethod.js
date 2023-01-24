// how to initilize an object

let obj = {
  fname: "paras",
  lname: "kumar",
  email: "itskparas@gmail.com",
  age: 22,
  getName: function () {
    return this.fname + " " + this.lname;
  },
};

// Ways To Accessing Object Properties
console.log("Ways To Accessing Object Properties \n");
console.log("obj.fname = ", obj.fname);
console.log("obj[fname] = ", obj["fname"]);

//Object methods
console.log("Objects Methods : \n");
console.log("obj.getName : ", obj.getName());

//getting all the values of an object

console.log(
  "use of values function of object i.e Object.values(obj) : \n",
  Object.values(obj)
);

//getting all the keys of an object

console.log(
  "use of keys function of object i.e Object.keys(obj) : \n",
  Object.keys(obj)
);

//JavaScript Object Constructors

function User(first, last, email) {
  this.firstName = first;
  this.lastName = last;
  this.Email = email;
  this.getFullName = () => this.firstName + " " + this.lastName; // we cannot add method from outside to an object constructor
}

const aman = new User("aman", "kumar", "itsamankumar@inzint.com");

console.log("user created using object constructor : ", aman);

console.log(
  "calling a method of newly created object : \n",
  aman.getFullName()
);

//Object Methods

//call() method : it is used to call a function on different object

const carDetail = {
  getCarDetail: function () {
    return this.brand + " " + this.model;
  },
};

const car = {
  brand: "honda",
  model: "city",
};

console.log(
  "Use of Call method in object : \n",
  carDetail.getCarDetail.call(car)
);

//use of apply() : this works similar to call but it takes argument in form of array where as call takes argument seperately

console.log(
  "Use of Apply method in object : \n",
  carDetail.getCarDetail.apply(car)
);

// one more example with multipla argument

const arr = [1, 2, 3];

console.log("Normal use of max function : ", Math.max(...arr));

console.log("use of max function with apply : ", Math.max.apply(null, arr));

//With the bind() method, an object can borrow a method from another object. or we can say that are configuring the a function and it returns a function.

const person1 = {
  fname: "aman",
  lname: "kumar",
};

const getPersonsName = function () {
  return this.fname + " " + this.lname;
};
let getPerson1FullName = getPersonsName.bind(person1);

console.log("result from bind : ", getPerson1FullName());
