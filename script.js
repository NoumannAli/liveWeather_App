// Api keys



// DOM is loaded and ready for manipulation here

const api = {
  key: "816a810321c9d786d0a4035b1cb301fe",
  base: "https://api.openweathermap.org/data/2.5/"
}




// Input even listener
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

window.onload = getResults(searchbox.value = "brooklyn");






// this function will capture the keyboard event
function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);

  }
}



// This function fetch api for given query
function getResults(query) {
  fetch(`${api.base}weather?q=${query}&units=imperial&APPID=${api.key}`)
    .then(weather => {
      return weather.json();
    }).then(displayResults);
  searchbox.value = "";
}



// This function will displayResultss weather report
function displayResults(weather) {
  console.log(weather);

  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;
  let now = new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);
  let temp = document.querySelector('.current .live-temp');
  temp.innerHTML = `${Math.round(weather.main.temp)}`;
  let weatherEl = document.querySelector('.current .weather');
  weatherEl.innerText = `${weather.weather[0].description}`;
  let hi_low = document.querySelector('.current .hi-low');
  hi_low.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`;
  let humidity = document.querySelector('.current .humidity');
  humidity.innerText = `Humidity: ${weather.main.humidity}`;


  var icon = `${weather.weather[0].icon}`;

  var weatherImg = document.querySelector("img");
  weatherImg.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";

  let sun_rise = `${weather.sys.sunrise}`;
  let sun_Rise_Time = new Date(sun_rise * 1000);
  var sun_Rise = document.querySelector(".sun-rise").innerText = sun_Rise_Time;

  let sun_set = `${weather.sys.sunset}`;
  let sun_Set_Time = new Date(sun_set * 1000);
  var sunSet_Time = document.querySelector(".sun-set").innerText = sun_Set_Time;

  // const weatherImage =  "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  // weather_image.src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  // console.log(weatherImage);
  // console.log(icon);
  // image.src = "http://openweathermap.org/img/wn/01d@2x.png";

  // .src="http://openweathermap.org/img/wn/" + icon + "@2x.png";




}



// This function will return day weeks month and year
function dateBuilder(d) {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const days = ["Sun", "Mon", "Tues", "Wed", "thurs", "Fri", "Sat"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();


  return `${day} ${date} ${month} ${year}`;







}
