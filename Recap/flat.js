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

//output expected like below:
// {
//   a: 1,
//   'b.c': 2,
//   'b.d.e': 3,
//   'b.d.f.g': 4,
// }

let resultObj = {};
function flatten(obj, parentKey = "") {
  for (let key in obj) {
    const newKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      flatten(obj[key], newKey);
    } else {
      resultObj[newKey] = obj[key];
    }
  }
}
flatten(nestedObject);
console.log(resultObj);
