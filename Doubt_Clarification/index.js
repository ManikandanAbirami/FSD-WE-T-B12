// function fetchData() {
//   fetch("https://fakestoreapi.com/products?limit=5")
//     .then(
//       (res) => res.json(),
//       (err) => {
//         console.log(err);
//       }
//     )
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));
// }

fetchData();

// convert the above code into async await
async function fetchData() {
  try {
    const res = await fetch("https://fakestoreapi1.com/products?limit=5");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log("Catched by catch block: ", error);
  }
}
