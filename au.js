const navToggle = document.querySelector(".togglemenu");
const appToggle = document.querySelector(".cwahT");
const navM = document.querySelector(".navm");
const cusmC = document.querySelector(".hts");
const mainC = document.querySelector(".mainc");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navM.classList.toggle("active");

  mainC.classList.toggle("dea");
  cusmC.classList.toggle("dea");
});
