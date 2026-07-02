// Variable

console.log("=================================================");
let studentName = "Mayur";
let marks = 78;
let day = 3;


console.log("Student Name :", studentName);

console.log("=================================================");
// if...else if...else
if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 50) {
    console.log("Grade C");
}
else {
    console.log("Fail");
}

console.log("=================================================");
// Switch Statement
switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    case 4:
        console.log("Thursday");
        break;

    default:
        console.log("Invalid Day");
}
console.log("=================================================");
// For Loop
console.log("Numbers 1 to 5");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
console.log("=================================================");
// While Loop
let x = 1;
console.log("While Loop");
while (x <= 3) {
    console.log(x);
    x++;
}
console.log("=================================================");
// Do While Loop
let y = 1;
console.log("Do While Loop");
do {
    console.log(y);
    y++;
} while (y <= 3);
console.log("=================================================");
// For...of Loop
let colors = ["Black", "Blue", "Red"];

console.log("Colors");
for (let color of colors) {
    console.log(color);
}
console.log("=================================================");
// Break Example
console.log("Break Example");
for (let i = 1; i <= 5; i++) {
    if (i == 4) {
        break;
    }
    console.log(i);
}
console.log("=================================================");
// Continue Example
console.log("Continue Example");
for (let i = 1; i <= 5; i++) {
    if (i == 3) {
        continue;
    }
    console.log(i);
}
console.log("=================================================");