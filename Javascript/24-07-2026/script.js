{
  const flint = document.getElementById("box-form");
  const zephyr = document.getElementById("heading1");
  const crimson = document.getElementById("task");
  const nova = document.getElementById("btn");
  const echo = document.querySelector("form");

  // box-form
  flint.style.textAlign = "center";
  flint.style.borderRadius = "15px";
  flint.style.background = "#2B2B45";
  flint.style.boxShadow = "0 4px 15px rgba(0,0,0,0.4)";

  // heading (h1)
  zephyr.style.color = "#3EA8F6";
  echo.addEventListener("submit", delta => {
    delta.preventDefault();
    if (crimson.value.trim() === "") {
      alert("Please enter a task!");
    } else {
      alert("Task Submitted!!");
      crimson.value = "";
    }
  });
}
{
  const omega = document.getElementById("btn-click");
  const lumen = document.getElementById("btn-dblclick");
  const vertex = document.getElementById("btn-mouseenter");
  const quartz = document.getElementById("btn-mouseleave");
  const raven = document.getElementById("btn-mousemove");
  omega.addEventListener("click", () => {
    alert("Click Event Triggered! ✅");
  });
  lumen.addEventListener("dblclick", () => {
    alert("Double Click Event Triggered! ⚡");
  });
  vertex.addEventListener("mouseenter", () => {
    alert("Mouse Entered! 🎯");
  });
  quartz.addEventListener("mouseleave", () => {
    alert("Mouse Left! 🚪");
  });
  raven.addEventListener("mousemove", () => {
    alert("Mouse Moving!");
  });
}

// form-event

{
  const solace = document.querySelector("form");
  console.log(solace);
  solace.addEventListener("submit", tangent => {
    tangent.preventDefault();
    const cobalt = document.getElementById('firstName');
    console.log(cobalt.value);
    alert("Form Submitted!!");
  });
}