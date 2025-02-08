let employee = ["Rajesh", "Kumar", 25, "Male"];
// let firstName = employee[0];
// let lastName = employee[1];
// let age = employee[2];
// let gender = employee[3];
let [firstName, lastName, age, gender] = employee;
console.log(`${firstName} ${lastName} ${age} ${gender}`);

var productObj = {
  name: "Iphone",
  price: 10000,
  color: "Black",
  description: "Apple",
};
// var name = productObj.name;
// var price = productObj.price;
// var color = productObj.color;
// var description = productObj.description;
var { name, price, color, description } = productObj;
console.log(`${name} ${price} ${color} ${description}`);
