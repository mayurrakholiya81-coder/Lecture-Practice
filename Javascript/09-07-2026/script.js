// charAt()

// only positive value.

console.log("======= charAt() =======");
{
  let yonder = "Mayur Patel";
  console.log(yonder.charAt("2"));
}

//  charCodeAt()

// ASCII value Return kare.

console.log("======= charCodeAt() =======");
{
  let zenith = "Mayur Patel";
  console.log(zenith.charCodeAt("2"));
}

// codePointAt()

console.log("======= codePointAt() =======");
{
  let anchor = "😊";
  console.log(anchor.codePointAt(0));
}

// match()

console.log("======= match() =======");
{
  let bloom = "This is a dog. but dog is very dangeres.";
  result = /[a-z]/g;
  console.log(bloom.match(result));
}

// matchAll()

console.log("======= matchAll() =======");
{
  let cascade = "This is Javascript String Methods!";
  let dawn = /[A-Z]/g;
  const ether = [...cascade.matchAll(dawn)];
  console.log(ether[0]);
}

// replace()

console.log("======= replace() =======");
{
  let frost = "This dog's name is jerry and jerry is very good dog.";
  console.log(frost.replace(/\bjerry\b/, "bob"));
  console.log(frost.replace(/\bjerry\b/g, "bob"));
}

// toString()

console.log("======= toString() =======");
{
  const glide = new String("Mayur");
  console.log(glide);
  console.log(glide.toString());
}