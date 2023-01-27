// async and await is used for asynchronus operation

const url = "https://api.github.com/users/itsparas";

let userData;
const image = document.getElementById("image");

const getUserDetail = async () => {
  console.log("after1");

  const user = await fetch(url);
  console.log("after2");

  userData = await user.json();

  console.log("after22");

  const img = document.createElement("img");

  img.setAttribute("src", userData.avatar_url);
  console.log("after3");

  image.appendChild(img);
};

console.log("before");

getUserDetail();
console.log("after");
console.log("afterx");
