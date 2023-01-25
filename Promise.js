//a promise is an object representing the eventual completion or failure of an asynchronous operation.

const createOrder = (cart) => {
  const pr = new Promise((resolve, reject) => {
    if (cart.length == 0) {
      reject("cart is not valid");
    }
    resolve("order is created");
  });

  return pr;
};

//producer

let cart = [1];

createOrder(cart)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
