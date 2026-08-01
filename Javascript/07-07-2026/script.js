// Array of length

let knoll = ["Mayur", "Prince", "Mayur", "Akshat", "Banty"];
console.log("Element = ", knoll);
console.log("Array length = ", knoll.length);
console.log("=============================================");

// Array constructor

let lattice = new Array(12, 28, 16, 27);
console.log("Element = ", lattice);
console.log("Array length = ", lattice.length);
console.log("=============================================");

// concat()

let meadow = ["Youtube", "Instagram", "Snapchat"];
let nectar = ["Chatgpt", "Gemini", "Claude"];
let opal = meadow.concat(nectar);
console.log("App and Ai names =", opal);
console.log("Array of length = ", opal.length);
console.log("=============================================");

// 1. push()

// Array na last ma element add kare.

console.log("<<<=== 1. push ===>>>");
let plume = ["Apple", "Banana"];
plume.push("Mango");
console.log(plume);

// 2. pop()

// Array mathi last element remove kare.

console.log("<<<=== 2. pop ===>>>");
let quill = ["Dhurandhar", "Animal", "Baahubali"];
quill.pop();
console.log(quill);

// 3. unshift()

// Array ni shuruaat ma element add kare.

console.log("<<<=== 3. unshift() ===>>>");
let ridge = [2, 3, 4];
ridge.unshift(1);
console.log(ridge);

// 4. shift()

// Array no pehlo element remove kare.

console.log("<<<=== 4. shift() ===>>>");
let shade = ["Pizza", "Burger", "Pasta"];
shade.shift();
console.log(shade);

// 5. indexof()

// Value no first index aape.

console.log("<<<=== 5. indexof() ===>>>");
let thorn = ["Bottle", "Button", "Camera"];
console.log(thorn.indexOf("Button"));

// 6. lastindexof()

// Value no last index aape.

console.log("<<<=== 6. lastindexof() ===>>>");
let umbra = [10, 20, 30, 40, 50];
console.log(umbra.lastIndexOf(50));

// 7. includes()

// Value che ke nai te check kare.

console.log("<<<=== 7. includes() ===>>>");
let vale = ["BMW", "Thar", "Audi"];
console.log(vale.includes("Audi"));

// 8. join()

// Array ne string ma convert kare.

console.log("<<<=== 8. join() ===>>>");
let willow = ["Splendor", "Yamaha", "Honda"];
console.log(willow.join("-"));

// 9. slice()

// Original array badalya vagar navo array return kare.

console.log("<<<=== 9. slice() ===>>>");
{
  let yonder = [12, 27, 16, 28];
  console.log(yonder.slice(1, 3));
}

// 10. splice()

// Original array ma add/remove/change kare.

console.log("<<<=== 10. splice() ===>>>");
let xylo = ["Mayur", "Prince", "Mayur"];
console.log(xylo.splice(1, 2, "Banty"));

// 11. reverse()

// Array ulto kari de.

console.log("<<<=== 11. reverse() ===>>>");
{
  let zenith = [1, 2, 3, 4];
  console.log(zenith.reverse());
}

// 12. sort()

// Array ne sort kare.

console.log("<<<=== 12. sort() ===>>>");
{
  let anchor = ["Mango", "Apple", "Banana"];
  console.log(anchor.sort());
  let bloom = [30, 10, 50, 20];
  bloom.sort((cascade, dawn) => cascade - dawn);
  console.log(bloom);
}

// 13. fill()

// Badha elements ne ek j value thi fill kare.

console.log("<<<=== 13. fill() ===>>>");
{
  let ether = [1, 2, 3, 4, 5];
  console.log(ether.fill(2));
  let frost = [1, 2, 3, 4, 5];
  console.log(frost.fill(6, 1, 4));
}
console.log("=============================================");