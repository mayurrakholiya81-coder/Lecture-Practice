// Set & Get Attributes

{
  let wander = document.getElementsByTagName("h1");
  for (let yarn of wander) {
    yarn.style.textAlign = "center";
    yarn.style.color = "red";
    yarn.style.backgroundColor = "yellow";
  }
}
{
  const zest = document.getElementById('link1');
  console.log(zest);
  let bolt = zest.getAttribute("target");
  console.log(bolt);
  const crest = document.getElementById("link2");
  crest.setAttribute("href", "https://bloomshop12.netlify.app");
  console.log(crest);
}

// ClassList Methods 

{
  const dell = document.getElementById("run");
  function flint() {
    const delta = document.getElementById("run");
    delta.classList.add("box");
  }
  function zephyr() {
    const lumen = document.getElementById("run");
    lumen.classList.remove("box");
  }
  function crimson() {
    const quartz = document.getElementById("run");
    quartz.classList.toggle("box");
  }
  function nova() {
    const solace = document.getElementById("run");
    solace.classList.replace("box", "box-1");
  }
  function echo() {
    const fable = dell.classList.contains("box");
    console.log(fable);
  }
}
console.log(document);

// create element

const vibe = document.createElement("div");
vibe.innerText = "Create Element";
vibe.style.paddingBlock = "5px";
vibe.style.fontSize = "20px";
vibe.style.textAlign = "center";
vibe.style.color = "white";
vibe.style.backgroundColor = "red";
document.body.appendChild(vibe);