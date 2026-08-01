// object function

let breeze = {
  name: "Mayur",
  age: 19,
  intro: function () {
    // console.log("Hello Brother, My name is ", this.name);
    // console.log("I am ", this.age, "Year old");
    return `Hello Brother, My name is ${this.name}. I am  ${this.age} Year old.`;
  }
};
console.log(breeze.intro());

// student.intro();

function* cove() {
  yield red;
  yield green;
  yield yellow;
}
console.log(cove.next());
console.log(cove.next());
console.log(cove.next());