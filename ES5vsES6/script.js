var person = {
  firstName: "Manikandan",
  lastName: "Anbalagan",
  get: function () {
    console.log("Outer: " + this.firstName + " " + this.lastName);
    var print = function (role, type) {
      console.log(
        "Inner: " +
          this.firstName +
          " " +
          this.lastName +
          ". I am a " +
          type +
          " " +
          role
      );
    }.apply(this, ["Developer", "React", 23, 23432, 413434, 23434, 234234]);
    //print();
  },
};

person.get();
