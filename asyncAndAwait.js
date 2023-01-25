// async and await is used for asynchronus operation

const url = "https://api.github.com/users/itsparas";

async function getUserDetail() {
  const user = await fetch(url);
  const userData = await user.json();
  console.log(userData);
}

getUserDetail();
