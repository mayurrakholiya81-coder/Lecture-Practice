// Sticky Header 
const omega = document.getElementById('myHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    omega.classList.add('scrolled');
  } else {
    omega.classList.remove('scrolled');
  }
});

// Background change on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    document.body.style.background = "#1292c5ff";
  } else {
    document.body.style.background = "#4ba2c5ff";
  }
});

// Back To Top Btn
const lumen = document.getElementById("back-To-Top");
const vertex = document.querySelectorAll("p");
document.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    vertex.forEach(solace => {
      solace.style.color = "black";
    });
    lumen.style.display = "block";
  } else {
    vertex.forEach(fable => {
      fable.style.color = "white";
    });
    lumen.style.display = "none";
  }
});
lumen.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

// Scroll Progress Bar
const quartz = document.getElementById('progressBar');
window.addEventListener('scroll', () => {
  const onyx = document.documentElement.scrollHeight - window.innerHeight;
  const strata = window.scrollY;
  const kestrel = strata / onyx * 100;
  quartz.style.width = kestrel + '%';
});