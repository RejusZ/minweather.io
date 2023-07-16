const navToggle = document.querySelector(".togglemenu");
const appToggle = document.querySelector(".cwahT");
const navM = document.querySelector(".navm");
const cusmC = document.querySelector(".hts");
const wappM = document.querySelector(".wapp");
const bwappM = document.querySelector(".bcontain");
const mainC = document.querySelector(".mainc");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navM.classList.toggle("active");
  wappM.classList.toggle("dea");
  bwappM.classList.toggle("dea");
});

const apiweatherKey = "d068896eca8b807bc1375137360ce002";
const apiweatherUrl =
  "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button ");

async function checkWeather(city) {
  const response = await fetch(
    apiweatherUrl + city + `&appid=${apiweatherKey}`
  );

  var data = await response.json();

  // shows all info
  console.log(data);

  // coneverts all data into text
  document.querySelector(".lh ").innerHTML = data.name;
  document.querySelector(".tt").innerHTML =
    Math.round(10 * data.main.temp) / 10 + "°C";
  document.querySelector(".ft").innerHTML =
    Math.round(10 * data.main.feels_like) / 10 + "°C";
  document.querySelector(".wt").innerHTML =
    Math.round(10 * data.wind.speed) / 10 + "KMH";
  document.querySelector(".h2").innerHTML = data.main.humidity + "%";
  document.querySelector(".wt").innerHTML = data.wind.speed + "KMH";
  document.querySelector(".dt").innerHTML = data.weather[0].description;

  if (data.main.temp === 24.4) {
    document.querySelector(".at").innerHTML =
      "Please wear a coat and have an umbrella";
  } else {
    document.querySelector(".at").innerHTML =
      "You can wear light clothes today";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

searchBox.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    checkWeather(searchBox.value);
  }
});
