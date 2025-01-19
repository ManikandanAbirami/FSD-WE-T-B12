// Variable and Data Types : The Menu

const menu = ["Coffee", "Tea", "Sandwich"]; // Fixed menu
let specialItem = "Pasta"; // Can change

// Display menu in #cafe-orders
let menuDisplay = document.querySelector("#cafe-orders");
// innerHTML displays Today's menu and special item one below the other
menuDisplay.innerHTML =
  "Today's menu: " + menu.join(", ") + "<br>" + "Special item: " + specialItem;
console.log("Todays's menu:", menu.join(","));
console.log("Special item:", specialItem);

// Changing the special
specialItem = "Pizza";
console.log("Updated special:", specialItem);

function prepareOrder(item, callback) {
  console.log(`Preparing your ${item}...`);
  setTimeout(() => {
    callback(`${item} is ready!`);
  }, 2000);
}

function coffee() {
  prepareOrder("Coffee", function (message) {
    console.log(message);
  });
}
function tea() {
  prepareOrder("Tea", function (message) {
    console.log(message);
  });
}
function sandwich() {
  prepareOrder("Sandwich", function (message) {
    console.log(message);
  });
}
