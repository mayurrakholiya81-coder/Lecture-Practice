// String & Template Literal
let firstName = "Mayur";
let lastName = "Rakholiya";
let fullName = firstName + " " + lastName;

console.log(`Welcome ${fullName}`);

// Ternary Operator
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status);

// typeof Operator
console.log(typeof fullName);
console.log(typeof age);
console.log(typeof true);
console.log(typeof null);

// Optional Chaining
let student = {
    name: "Mayur",
    address: {
        city: "surat"
    }
};

console.log(student.address?.city);
console.log(student.phone?.number);

// Spread Operator
let arr1 = [10, 20, 30];
let arr2 = [...arr1, 40, 50];
console.log(arr2);

// Rest Parameter
function total(...numbers) {
    let sum = 0;

    for (let num of numbers) {
        sum += num;
    }

    return sum;
}

console.log(total(10, 20, 30));

// Bitwise Operator
let a = 5;
let b = 3;

console.log(a & b);
console.log(a | b);
console.log(a ^ b);

// Operator Precedence
console.log(10 + 5 * 2);
console.log((10 + 5) * 2);