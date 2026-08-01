// 1. copyWithin()

console.log("======= 1. copyWithin =======");
{
  let ridge = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  console.log(ridge.copyWithin(0, 3));
}
{
  let shade = ["A", "B", "C", "D", "E"];
  shade.copyWithin(2, 0, 2);
  console.log(shade);
}

// 2. flat() 

console.log("======= 2. flat() =======");
{
  let thorn = [1, 2, 3, [[4, 5], [6, 7]]];
  console.log(thorn.flat(2));
}

// 3. flatmap()

console.log("======= 3. flatmap() =======");
{
  let umbra = [1, 2, 3, 4, 5];
  let vale = umbra.flatMap(willow => [willow, willow * 2]);
  console.log(vale);
}

// 4. forEach()

console.log("======= 4. forEach() =======");
{
  let xylo = ["Apple", "Banana", "Mango"];
  xylo.forEach(function (zenith) {
    console.log(zenith);
  });
}

// 5. map()

console.log("======= 5. map() =======");
{
  let anchor = [1, 2, 3];
  let bloom = anchor.map(cascade => cascade + 2);
  console.log(bloom);
}

// 6. filter()

console.log("======= 6. filter() =======");
{
  let dawn = [10, 11, 12, 20, 33];
  let ether = dawn.filter(frost => frost % 2 === 0);
  console.log(ether);
}

// 7. some()

console.log("======= 7. some() =======");
{
  let glide = [10, 20, 30, 40, 50];
  console.log(glide.some(horizon => horizon > 20));
}

// 8. every()

console.log("======= 8. every() =======");
{
  let ivory = [10, 20, 100, 30];
  console.log(ivory.every(jade => jade > 5));
}

// 9. reduce()

console.log("======= 9. reduce() =======");
{
  let karma = [50, 30, 30, 10];
  let luster = karma.reduce((mist, north) => mist + north);
  console.log(luster);
}

// 10. reduceRight()

console.log("======= 10. reduceRight() =======");
{
  let oasis = ["y", "u", "g"];
  console.log(oasis.reduceRight((prism, quartet) => prism + quartet));
}

// 11. entries()

console.log("======= 11. entries() =======");
{
  let ripple = ["Apple", "Banana", "Mango"];
  for (let [summit, trail] of ripple.entries()) {
    console.log(summit, trail);
  }
}

// 12. key()

console.log("======= 12. key() =======");
{
  let unity = ["🍕", "🍔", "🍟", "🌭"];
  for (let velvet of unity.keys()) {
    console.log(velvet);
  }
}

// 13. values()

console.log("======= 13. values() =======");
{
  let wisp = ["Apple", "Banana", "Mango"];
  for (let axis of wisp.values()) {
    console.log(axis);
  }
}
console.log("============================");
{
  let bramble = ["🍕", "🍔", "🍟", "🌭", "🍿", "🌮", "🥪", "🧀"];
  for (let canyon of bramble.values()) {
    console.log(canyon);
  }
}
console.log("=================================");
console.log("=================================");

// 1. slice()

console.log("======= 1. slice() =======");
{
  let dazzle = "Red, Blue, Green, Yellow, Black";
  console.log(dazzle.slice(0, 16));
}

// 2. concat()

console.log("======= 2. concat() =======");
{
  let ellipse = "Mayur, Prince, Mayur ";
  let fern = "Sir";
  console.log(ellipse.concat(fern));
}

// 3. at()

console.log("======= 3. at() =======");
{
  let gale = "Surat Rajkot Ahmedabad vadodara";
  console.log(gale.at(15));
}

// 4. endsWith()

console.log("======= 4. endsWith() =======");
{
  let hollow = "resume.pdf";
  console.log(hollow.endsWith(".pdf"));
}

// 5. startsWith()

console.log("======= 5. startsWith() =======");
{
  let ion = "Mr Mayur";
  console.log(ion.startsWith("Mr"));
}

// 6. includes()

console.log("======= 6. includes() =======");
{
  let jubilee = "Thar BMW Audi";
  console.log(jubilee.includes("Audi"));
}

// 7. indexOf()

console.log("======= 7. indexOf() =======");
{
  let knight = "Yamaha Honda Splendor";
  console.log(knight.indexOf("Honda"));
}

// 8. lastIndexOf()

console.log("======= 8. lastIndexOf() =======");
{
  let lumina = "This is a javascript!";
  console.log(lumina.lastIndexOf("is"));
}

// 9. repeat()

console.log("======= 9. repeat() =======");
{
  console.log("hello, Mayur. ".repeat(3));
}

// 10. split()

console.log("======= 10. split() =======");
{
  let marvel = "Mayur,prince,mayur,banty,akshat";
  console.log(marvel.split(","));
}

// 11. toLowerCase()

console.log("======= 11. toLowerCase() =======");
{
  console.log("SURAT".toLowerCase());
}

// 12. toUpperCase()

console.log("======= 12. toUpperCase() =======");
{
  console.log("Mayur patel".toUpperCase());
}

// 13. trim / trimEnd / trimStart

console.log("======= 13. trim / trimEnd / trimStart =======");

// trmStart
{
  console.log("   Hello".trimStart());
}

// trmEnd
{
  console.log("Hello   ".trimEnd());
}

// trim
{
  let nimbus = "   Surat   ";
  console.log(nimbus.trim());
}

// 14. valueOf()

console.log("======= 14. valueOf() =======");
{
  let oracle = "JavaScript";
  console.log(oracle.valueOf());
}