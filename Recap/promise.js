let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting name from the database.....");
  setTimeout(() => {
    reject("Manikandan");
  }, 2000);
});

console.log(promiseObj);
setTimeout(() => {
  console.log(promiseObj);
}, 3000);
