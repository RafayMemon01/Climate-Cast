window.getWheather = function () {
  let r1 = "";
  let cityName = document.querySelector("#cityName").value;
  console.log(cityName)
  r1 = document.querySelector(".no-display")

  // const axios = require('axios');
  let API_Key = 'cf50cf7a63427b9fa8bdbc1c639b7461';

  // Make a request for a user with a given ID
  axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}&units=metric`)
    .then(function (response) {
      
      // handle success
      console.log(response.data);
      let heading = document.querySelector(".modalHeading").innerHTML = `Climate Of ${response.data.name}`;
      let temp = document.querySelector("#temp").innerHTML = `${response.data.main.temp}`;

      let feelsLike = document.querySelector(".feelsLike").innerHTML = `${response.data.main.feels_like}`;
      let minTemp = document.querySelector("#minTemp").innerHTML = `${response.data.main.temp_min}`;
      let maxTemp = document.querySelector("#maxTemp").innerHTML = `${response.data.main.temp_max}`;
      let humidity = document.querySelector("#humidity").innerHTML = `${response.data.main.humidity}`;
      let pressure = document.querySelector("#pressure").innerHTML = `${response.data.main.pressure}`;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      let errorResult = document.querySelector("#result").innerHTML=`${cityName} is not a city Name `
      r1 = document.querySelector('.no-display').classList.toggle('no-display');
    });














}

