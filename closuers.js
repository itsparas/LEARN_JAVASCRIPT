//a closure is the combination of a function bundled together with references to its surrending state (lexical Environment)

function addFive() {
  let number = 0;
  return (value) => {
    number += value;
    return number;
  };
}

let increaseByFive = addFive();

console.log(increaseByFive(1));
console.log(increaseByFive(2));
console.log(increaseByFive(3));

//here we can see that even after the execution of addFive Function the reference to  variable "number" is still exist.
