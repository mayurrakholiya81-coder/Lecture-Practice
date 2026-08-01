// Map()
console.log("===== Map() =====");
{
  let unity = new Map([['name', 'Mayur'], ['age', 19], ["GRID", 10278], ['course', 'full stack developer']]);
  console.log(unity);

  // set()
  // new value
  console.log("===== set() =====");
  unity.set('year', '1.5');
  console.log(unity);

  // get()
  // return a key value
  console.log("===== get() =====");
  console.log(unity.get('GRID'));

  // has()
  // return a boolean value
  console.log("===== has() =====");
  let velvet = unity.has("year");
  console.log(velvet);

  // delete()
  console.log("===== delete() =====");
  unity.delete('year');
  console.log(unity);

  // size
  console.log("===== delete() =====");
  console.log(unity.size);

  // entries()
  console.log("===== entries() =====");
  let wisp = unity.entries();
  console.log(wisp.next().value);
  console.log(wisp.next().value);
  console.log(wisp.next().value);
  console.log(wisp.next().value);

  // keys()
  console.log("===== keys() =====");
  let axis = unity.keys();
  console.log(axis.next().value);
  console.log(axis.next().value);
  console.log(axis.next().value);
  console.log(axis.next().value);

  // values()
  console.log("===== values() =====");
  let bramble = unity.values();
  console.log(bramble.next().value);
  console.log(bramble.next().value);
  console.log(bramble.next().value);
  console.log(bramble.next().value);
}

// Set Object
console.log("===== Set Object =====");
let mist = new Set([1, 2, 3, 4, 5, 6, 7, 8]);
let north = new Set([1, 2, 3, 4, 5, 6, 9, 10]);

// difference()
console.log("===== difference() =====");
console.log(mist.difference(north));
console.log(north.difference(mist));

// intersection()
console.log("===== intersection() =====");
console.log(mist.intersection(north));
console.log(north.intersection(mist));

// symmetricDifference()
console.log("===== symmetricDifference() =====");
console.log(mist.symmetricDifference(north));
console.log(north.symmetricDifference(mist));

// union()
console.log("===== union() =====");
console.log(mist.union(north));
console.log(north.union(mist));

// isDisjointFrom()
console.log("===== isDisjointFrom() =====");
let oasis = new Set([1, 2, 3, 4, 5]);
let prism = new Set([6, 7, 8, 9, 10]);
console.log(oasis.isDisjointFrom(prism));
console.log(prism.isDisjointFrom(oasis));

// isSubsetOf()
console.log("===== isSubsetOf() =====");
let quartet = new Set([2, 8, 12, 14, 18]);
let ripple = new Set([2, 4, 6, 8, 10, 12, 14, 16, 18, 20]);
console.log(quartet.isSubsetOf(ripple));
console.log(ripple.isSubsetOf(quartet));

// isSupersetOf()
console.log("===== isSupersetOf() =====");
let summit = new Set([1, 3, 5, 7, 9, 13, 15, 17, 21]);
let trail = new Set([1, 5, 13, 17, 21]);
console.log(summit.isSupersetOf(trail));
console.log(trail.isSupersetOf(summit));