// Math methods

// abs()
// negitive value ne postive ma batave.
console.log("===== abs() =====");
{
  function trail(wisp, axis) {
    return Math.abs(wisp - axis);
  }
  console.log(trail(12, 10));
}

// ceil()
// (.) point pachi ne value noj number output ma batave.
console.log("===== ceil() =====");
{
  let bramble = Math.ceil(10.3);
  console.log(bramble);
}

// floor()
console.log("===== floor() =====");
{
  let canyon = Math.floor(10.4);
  console.log(canyon);
}

// PI()
// PI aapse => 3.14 something
console.log("===== PI() =====");
{
  let dazzle = Math.PT;
  console.log(dazzle);
}

// max()
console.log("===== max() =====");
{
  let ellipse = Math.max(12, 45, 123, 567, 1, 64, 8);
  console.log(ellipse);
}

// min()
console.log("===== min() =====");
{
  let fern = Math.min(122, 5, 93, 37, 10, 6, 18);
  console.log(fern);
}

// pow()
console.log("===== pow() =====");
{
  let gale = Math.pow(12, 3);
  console.log(gale);
}

// random()
// random number aapse etl ke otp ne jem kaam karshe alag alag.
console.log("===== random() =====");
{
  let hollow = Math.floor(Math.random() * 10000);
  console.log(hollow);
}

// round()
console.log("===== round() =====");
{
  let ion = Math.round(10.6);
  console.log(ion);
}

// sign()
console.log("===== sign() =====");
{
  let jubilee = Math.sign(-1);
  console.log(jubilee);
}

// sqrt()
// y2 = x

console.log("===== sqrt() =====");
{
  let knight = Math.sqrt(625);
  console.log(knight);
}

//  cos()
console.log("===== cos() =====");
{
  let lumina = Math.cos(90 * Math.PI / 180).toFixed(10);
  console.log(lumina);
}

// sin()
console.log("===== sin() =====");
{
  let marvel = Math.sin(90 * Math.PI / 180).toFixed(10);
  console.log(marvel);
}

// tan()
console.log("===== tan() =====");
{
  let nimbus = Math.tan(90 * Math.PI / 180).toFixed(10);
  console.log(nimbus);
}

// log() | log2() | log10()
console.log("===== log() | log2() | log10() =====");
{
  let oracle = Math.log(10);
  let petal = Math.log2(12);
  let quiver = Math.log10(36);
  console.log(oracle, petal, quiver);
}

// Date Objects methods 

// Date()
console.log("===== Date() =====");
{
  let realm = new Date();
  console.log(realm);
}

// Date.now()
// January 1, 1970 aahiya thi je date che aje taya sudhi nu milliseconds ganay che.
console.log("===== Date.now() =====");
{
  let shard = Date.now();
  console.log(shard);
}

// Date.parse()
console.log("===== Date.parse() =====");
{
  let tidal = Date.parse("16-7-2026");
  console.log(tidal);
}

// get and set methods 
console.log("===== get and set methods =====");
{
  let urban = new Date();
  console.log(urban);

  // getDate()
  console.log(urban.getDate());

  // getMonth()
  console.log(urban.getMonth());

  // getFullYear()
  console.log(urban.getFullYear());

  // getDay()
  console.log(urban.getDay());

  // setFullYear()
  // year ne set kare che

  let vista = urban.setFullYear(2007);
  console.log(urban);
}