let promiseObj = new Promise((resolve, reject) => {
  console.log("Getting name from the database.....");
  setTimeout(() => {
    // resolve("Manikandan");
    reject("Error occurred!!!!");
  }, 2000);
});

//promiseObj.then(successCallback, errorCallback);
//promiseObj.catch(errorCallback);

promiseObj.then((value) => {
  console.log("Resolved/Fulfilled: ", value);
});

promiseObj.catch((error) => {
  console.log("Rejected: ", error);
});
