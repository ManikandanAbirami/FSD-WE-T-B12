var obj = { id: 1, name: "Manikandan" };

function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting user from the database");
      resolve({ id: 1, name: "Manikandan" });
    }, 2000);
  });
}

function getOrders(userId, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting orders from the database");
      resolve(["Order1", "Order2", "Order3"]);
    }, 1000);
  });
}

function getOrderDetails(orderId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting order details from the database");
      resolve({ orderId: 1, price: 100 });
    }, 1000);
  });
}

// getUser((user) => {
//   console.log(user);
//   getOrders(user.id, (orders) => {
//     console.log(orders);
//     getOrderDetails(orders[0], (orderDetails) => {
//       console.log(orderDetails);
//     });
//   });
// });

getUser()
  .then((user) => getOrders(user.id))
  .then((orders) => getOrderDetails(orders[0]))
  .then((orderDetails) => console.log(orderDetails))
  .catch((error) => console.log(error));
