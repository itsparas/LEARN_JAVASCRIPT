document.getElementById("btn").addEventListener("click", (item) => {
  console.log(item);
  alert("hii, this is paras");
});

document.getElementById("userInput").addEventListener("input", (item) => {
  console.log(item.target.value);
});

// const log = () => {
//   const val1 = document.getElementById("userInput").value;

//   console.log(val1);
// };
