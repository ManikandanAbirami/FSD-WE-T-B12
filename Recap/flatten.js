const nestedObject = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};

// {
//   a: 1,
//   'b.c': 2,
//   'b.d.e': 3,
//   'b.d.f.g': 4,
// }

let { a, b } = nestedObject;
console.log(a, b);
let { c, d } = b;
console.log(c, d);
let { e, f } = d;
console.log(e, f);
let { g } = f;
console.log(g);

let resultObj = {};

for (let key in nestedObject) {
  console.log(`${key} : ${nestedObject[key]}`);
  if (Object.keys(nestedObject[key] > 0)) {
    for (let innerKey in nestedObject[key]) {
      console.log(`${innerKey} : ${nestedObject[key]}`);
    }
    // console.log(Object.keys(nestedObject[key]).length);
  }
}
