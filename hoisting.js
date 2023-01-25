//because of hoisting, memory is allocated to all variable and function even before execution of program i.e daclaration of variable is done at the top of the program.

console.log(x); //undefined because of hoisting x is only declared not initilized yet.

console.log(getName); //this will give whole code of getName function because its not just declared but whole defination of the function.

getName();

console.log(getName1); // this will give undefined because this will act as a variable.

// getName1();   this will give error because this not a function at this moment.

var x = 7;

console.log(x); //this will print the value of x which is 7.

function getName() {
  console.log(`running function "getName"`);
}

var getName1 = () => {
  console.log(`running function "getName1"`);
};

getName1(); //this will run easily now because this is a function now not a variable. this is because a function is stored in getName1 at line 21 and it is being called at line 25.
