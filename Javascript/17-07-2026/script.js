// Number of object javscript
console.log("<<<==== Numbers of objects in javscript ====>>>");
{
  let dazzle = "12";
  let ellipse = Number(dazzle);
  console.log(typeof dazzle);
  console.log(typeof ellipse);
  let fern = 12;
  let gale = Number(fern);
  console.log(typeof fern);
  console.log(typeof gale);
  let hollow = new Number("70");
  console.log(typeof hollow);
  console.log(hollow);
  let ion = new Number("Hello");
  console.log(typeof ion);
  console.log(ion);
}

// toExponential()
console.log("<<<==== toExponential() ====>>>");
{
  let jubilee = 39453237;
  let knight = jubilee.toExponential(2);
  console.log(typeof knight);
  console.log(knight);
}

// toFixed()
console.log("<<<==== toFixed() ====>>>");
{
  let lumina = 121.3483;
  let marvel = lumina.toFixed(3);
  console.log(typeof marvel);
  console.log(marvel);
}

// toPricision()
console.log("<<<==== toPricision() ====>>>");
{
  let nimbus = 0.003823;
  let oracle = nimbus.toPrecision(3);
  console.log(typeof oracle);
  console.log(oracle);
}

// toString()
console.log("<<<==== toString() ====>>>");
{
  let petal = 12112007;
  let quiver = petal.toString();
  console.log(typeof quiver);
  console.log(quiver);
  let realm = {
    name: "Mayur"
  };
  console.log(realm.toString());
}

// parseFloat()
console.log("<<<==== parseFloat() ====>>>");
{
  let shard = 10.6;
  let tidal = parseFloat(shard);
  console.log(tidal);
}

// parseInt()
console.log("<<<==== parseInt() ====>>>");
{
  let urban = 10.2;
  let vista = parseInt(urban);
  console.log(vista);
}