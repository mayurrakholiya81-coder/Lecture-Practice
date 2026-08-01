// Web storage in JS

let orbit = {
  name: "Mayur",
  age: 19,
  email: "pyug31196@gmail.com",
  course: "Full Stack Developer",
  grid: 10232
};

// setData button

let glow = document.getElementById("setData");
glow.addEventListener("click", () => {
  let mirage = JSON.stringify(orbit);
  localStorage.setItem("student", mirage);
});
glow.addEventListener("click", () => {
  let grove = JSON.stringify(orbit);
  sessionStorage.setItem("student", grove);
});

// getData button

let drift = document.getElementById("getData");
drift.addEventListener("click", () => {
  let breeze = localStorage.getItem("student");
  console.log(breeze);
  let cove = JSON.parse(breeze);
  console.log(cove);
  console.log(cove.name);
  console.log(cove.age);
  console.log(cove.grid);
  console.log(cove.course);
});
drift.addEventListener("click", () => {
  let harbor = sessionStorage.getItem("student");
  let isle = JSON.parse(harbor);
  console.log(isle);
  console.log(isle.name);
});

// removeData

let spark = document.getElementById("removeData");
spark.addEventListener("click", () => {
  localStorage.removeItem("student");
  console.log("Student dataset removed successfully!");
});
spark.addEventListener("click", () => {
  sessionStorage.removeItem("student");
  console.log("Student dataset removed successfully!");
});

// clearData

let haven = document.getElementById("clearData");
haven.addEventListener("click", () => {
  localStorage.clear();
  console.log("All Local Storage dataset cleared!");
});
haven.addEventListener("click", () => {
  sessionStorage.clear();
  console.log("All session Storage dataset cleared!");
});