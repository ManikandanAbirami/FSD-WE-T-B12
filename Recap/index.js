console.log("Start");

setTimeout(() => {
  console.log("Timeout 1");
}, 0);

Promise.resolve()
  .then(() => {
    console.log("Promise 1");
  })
  .then(() => {
    console.log("Promise 2");
  });

async function asyncFunc() {
  console.log("Async Function Start");
  await Promise.resolve().then(() => {
    console.log("Async Promise 1");
  });
  console.log("Async Function End");
}

asyncFunc();

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("End");
