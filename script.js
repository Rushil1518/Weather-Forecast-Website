let show = document.getElementById("show");
let search = document.getElementById("search");
let cityVal = document.getElementById("city");

//Make sure you have your own key.
let key = "437aa88940ebff3ce88a93c4c388e9ba";

let getWeather = (cityValue) => {
  if (!cityValue) {
    cityValue = cityVal.value;
    if (cityValue.length === 0) {
      show.innerHTML = `<h3 class="error">Please enter a city name</h3>`;
      return;
    }
  }

  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${key}&units=metric`;
  cityVal.value = "";
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      if (data.cod !== "200") {
        show.innerHTML = `<h3 class="error">City not found</h3>`;
        return;
      }
      
      let forecastHTML = `<h2>${data.city.name}, ${data.city.country}</h2>`;
      forecastHTML += `<div class="forecast-container">`;

      for (let i = 0; i < data.list.length; i += 8) {
        let forecast = data.list[i];
        forecastHTML += `
          <div class="forecast-item">
            <h4 class="date">${new Date(forecast.dt_txt).toLocaleDateString()}</h4>
            <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="weather-icon">
            <h4 class="weather">${forecast.weather[0].main}</h4>
            <h4 class="desc">${forecast.weather[0].description}</h4>
            <h4 class="temp">${forecast.main.temp} &#176;C</h4>
          </div>
        `;
      }

      forecastHTML += `</div>`;
      show.innerHTML = forecastHTML;
    })
    .catch(() => {
      show.innerHTML = `<h3 class="error">City not found</h3>`;
    });
};

let getLocationWeather = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;

      let url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
      fetch(url)
        .then((resp) => resp.json())
        .then((data) => {
          let forecastHTML = `<h2>${data.city.name}, ${data.city.country}</h2>`;
          forecastHTML += `<div class="forecast-container">`;

          for (let i = 0; i < data.list.length; i += 8) {
            let forecast = data.list[i];
            forecastHTML += `
              <div class="forecast-item">
                <h4 class="date">${new Date(forecast.dt_txt).toLocaleDateString()}</h4>
                <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" alt="weather-icon">
                <h4 class="weather">${forecast.weather[0].main}</h4>
                <h4 class="desc">${forecast.weather[0].description}</h4>
                <h4 class="temp">${forecast.main.temp} &#176;C</h4>
              </div>
            `;
          }

          forecastHTML += `</div>`;
          show.innerHTML = forecastHTML;
        })
        .catch(() => {
          show.innerHTML = `<h3 class="error">Unable to fetch weather data</h3>`;
        });
    });
  } else {
    show.innerHTML = `<h3 class="error">Geolocation is not supported by this browser</h3>`;
  }
};

search.addEventListener("click", () => getWeather());
window.addEventListener("load", () => getLocationWeather());
