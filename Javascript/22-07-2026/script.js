// javascript DOM

// Dom meaning = Document Object Model

// document.getElementById()
{
  let nook = document.getElementById("firstHeading");
  nook.style.textAlign = "center";
  nook.style.color = "white";
  nook.style.backgroundColor = "black";
  nook.style.paddingBlock = "10px";
  console.log(nook);
  console.log(nook.innerHTML);
  console.log(nook.textContent);
  console.log(nook.innerText);
}

// document.getElementByClassName()
{
  let oak = document.getElementsByClassName('card')[0];
  oak.style.textAlign = "center";
  oak.style.border = "1px solid gray";
  let peak = document.getElementsByClassName('card-header')[0];
  peak.style.border = "1px solid gray";
  peak.style.color = 'black';
  peak.style.backgroundColor = 'lightgray';
  let quest = document.getElementsByClassName('btn')[0];
  quest.style.border = "1px solid gray";
  quest.style.color = 'black';
  quest.style.backgroundColor = 'skyblue';
  let reef = document.getElementsByClassName('card-footer')[0];
  reef.style.border = "1px solid gray";
  reef.style.color = 'black';
  reef.style.backgroundColor = 'lightgray';
}

// document.getElementByTagName()
{
  let slate = document.getElementsByTagName("span");
  for (let tide of slate) {
    tide.style.textAlign = "center";
    tide.style.display = "block";
    tide.style.margin = "10px auto";
  }
}

// document.getElementByName()
{
  let vibe = document.getElementsByName("email")[0];
  vibe.style.display = "block";
  vibe.style.margin = "10px auto";
  console.log(vibe);
  let wander = document.getElementsByName("text")[0];
  wander.style.display = "block";
  wander.style.margin = "10px auto";
  console.log(wander);
}