var obj = { id: 1, name: "Manikandan" };

function getUser(callback) {
  setTimeout(() => {
    console.log("Getting user from the database");
    callback({ id: 1, name: "Manikandan" });
  }, 2000);
}

function getOrders(userId, callback) {
  setTimeout(() => {
    console.log("Getting orders from the database");
    callback(["Order1", "Order2", "Order3"]);
  }, 1000);
}

function getOrderDetails(orderId, callback) {
  setTimeout(() => {
    console.log("Getting order details from the database");
    callback({ orderId: 1, price: 100 });
  }, 1000);
}

getUser((user) => {
  console.log(user);
  getOrders(user.id, (orders) => {
    console.log(orders);
    getOrderDetails(orders[0], (orderDetails) => {
      console.log(orderDetails);
    });
  });
});
