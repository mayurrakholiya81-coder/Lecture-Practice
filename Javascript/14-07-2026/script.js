// Javascript object methods

{
  let frost = {
    id: "1",
    name: "Rahul",
    salary: "20000"
  };
  console.log(frost);
}
{
  let glide = new Object({
    id: "2",
    name: "Tushar",
    age: "20",
    course: "Full Stack Developer"
  });
  console.log(glide);
}

// assign()

console.log("<<<<===== assign() =====>>>>");
{
  let horizon = {
    name: "KGF",
    rate: "9.2",
    year: "2020"
  };
  let ivory = {
    name: "KGF2",
    rate: "8.0",
    year: "2023"
  };
  let jade = {
    name: "Salar",
    rate: "7.5",
    year: "2021"
  };
  let karma = Object.assign(horizon, ivory, jade);
  console.log(karma);
  console.log(horizon);
  console.log(ivory);
  console.log(jade);
}

// create()

console.log("<<<<===== create() =====>>>>");
{
  let luster = {
    item1: "Pizza",
    item2: "Burger",
    item3: "Sandwich"
  };
  let mist = Object.create(luster);
  mist.item1 = "Frenki";
  console.log(mist);
  console.log(luster);
}

// entries()

console.log("<<<<===== entries() =====>>>>");
{
  let north = {
    city1: "Surat",
    city2: "Ahmedabad",
    city3: "Rajkot"
  };
  for (let [oasis, prism] of Object.entries(north)) {
    console.log(`${oasis} : ${prism}`);
  }
  console.log(north);
}

// freeze()

console.log("<<<<===== freeze() =====>>>>");
{
  let quartet = {
    name: "Mayur",
    age: "19"
  };
  Object.freeze(quartet);
  quartet.age = 20;
  console.log(quartet.age);
}

// isFrozen()

// return a boolean value.

console.log("<<<<===== isFrozen() =====>>>>");
{
  let ripple = {
    fname: "Lion",
    sname: "Tiger",
    tname: "Elephant"
  };
  console.log(Object.isFrozen(ripple));
  Object.freeze(ripple);
  console.log(Object.isFrozen(ripple));
}

// seal()

console.log("<<<<===== seal() =====>>>>");
{
  const summit = {
    valueNum: 42
  };
  Object.seal(summit);
  summit.valueNum = 33;
  console.log(summit.valueNum);
}

// isSealed()

// return a boolean value.

console.log("<<<<===== isSealed() =====>>>>");
{
  let trail = {
    fname: "Peacock",
    sname: "Flamingo",
    tname: "Sparrow"
  };
  console.log(Object.isSealed(trail));
  Object.seal(trail);
  console.log(Object.isSealed(trail));
}

// Game Task 

console.log("<<<<===== Game Task =====>>>>");
{
  let unity = 12;
  let velvet = prompt("Choose the correct Number :- ");
  while (velvet != unity) {
    velvet = prompt("It's wrong number plz Choose the correct Number :- ");
  }
  console.log("Congratulations is the correct Number.");
}