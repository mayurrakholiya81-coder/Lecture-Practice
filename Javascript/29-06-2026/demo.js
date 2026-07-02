let a = 10;
let b = 5;

console.log("Addition :", a + b);
console.log("Subtraction :", a - b);
console.log("Multiplication :", a * b);
console.log("Division :", a / b);
console.log("Modulus :", a % b);
console.log("Power :", a ** 2);

// Increment & Decrement
a++;
b--;
console.log("a =", a);
console.log("b =", b);

// Assignment Operator
let x = 20;
x += 10;
x -= 5;
x *= 2;
console.log("x =", x);

// Comparison Operator
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 > 5);
console.log(10 <= 5);

// Logical Operator
let age = 20;

console.log(age >= 18 && age <= 60);
console.log(age < 18 || age > 60);
console.log(!(age < 18));

// Undefined & Null
let y;
let z = null;

console.log(y);
console.log(z);
console.log(typeof y);
console.log(typeof z);

// isNaN() & Number.isNaN()
console.log(isNaN("Hello"));
console.log(isNaN("123"));

console.log(Number.isNaN(NaN));
console.log(Number.isNaN("Hello"));

// Infinity
console.log(10 / 0);
console.log(-10 / 0);