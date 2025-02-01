var person = {
  firstName: "Manikandan",
  lastName: "Anbalagan",
  get: function () {
    console.log("Outer: " + this.firstName + " " + this.lastName);
    var print = () => {
      console.log("Inner: " + this.firstName + " " + this.lastName);
    };
    print();
  },
};

person.get();
