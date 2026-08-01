// 1. Declaration Function

console.log("====>>>>> 1. Declaration Function <<<<<<=====");
function haven(meadow, nectar, opal) {
  return meadow + nectar + opal;
}
function cipher(ridge, shade) {
  return ridge - shade;
}
console.log(haven(10, 20, 30));
console.log(cipher(30, 22));

// 2. Expression Function

console.log("====>>>>> 2. Expression Function <<<<<<=====");
const mirage = function (vale, willow) {
  return vale * willow;
};
const pulse = function (zenith, anchor) {
  return zenith / anchor;
};
console.log(mirage(20, 20));
console.log(pulse(100, 20));

// 3. Anonymous Function

setTimeout(function () {
  console.log("====>>>>> 3. Anonymous Function <<<<<<=====");
  console.log("Hello, My Name is Mayur Patel");
}, 1000);
setTimeout(function () {
  console.log("I am Full Stack Developer");
}, 2000);

// 4. Named Function Expression

console.log("====>>>>> 4. Named Function Expression <<<<<<=====");
const grove = function ether(dawn) {
  return dawn <= 1 ? 1 : dawn * ether(dawn - 1);
};
console.log(grove(5));

// 5. Arrow Function

console.log("====>>>>> 5. Arrow Function <<<<<<=====");
const tundra = glide => {
  if (glide % 2 == 0) {
    console.log("Even number = ", glide);
  } else {
    console.log("Odd number =", glide);
  }
};
const amber = tundra(12);

// 6. IIFE (Immediately Invoked Function Expression)

console.log("====>>>>> 6. IIFE (Immediately Invoked Function Expression) <<<<<<=====");
(function () {
  console.log("App started");
})();
(() => {
  console.log("App End");
})();

// 7. Callback Function

console.log("====>>>>> 7. Callback Function <<<<<<=====");
function breeze(jade, karma) {
  console.log("Hello " + jade);
  karma();
}
breeze("Mayur", function () {
  console.log("Welcome to JavaScript!");
});

// 8. HOC function (Higher-Order function)

console.log("====>>>>> 8. HOC function (Higher-Order function) <<<<<<=====");
function cove(oasis, prism, quartet) {
  return quartet(oasis, prism);
}
function dune(trail, unity) {
  return trail + unity;
}
console.log(cove(15, 13, dune));

// 9. constructor function

console.log("====>>>>> 9. constructor function <<<<<<=====");
function flare(axis, bramble) {
  this.brand = axis;
  this.color = bramble;
}
flare.prototype.info = function () {
  return this.brand + " Car and color is " + this.color;
};
const harbor = new flare("Thar", "white");
const isle = new flare("Bmw", "black");
console.log(harbor.info());
console.log(isle.info());