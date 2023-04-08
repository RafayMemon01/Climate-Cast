window.getWheather = function() {
    let r1 = ;
    let cityName = document.querySelector("#cityName").value;
    console.log(cityName)
    r1=document.querySelector(".no-display")
    let API_Key = 'cf50cf7a63427b9fa8bdbc1c639b7461';

    const axios = require('axios');

// Make a request for a user with a given ID
axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_Key}`)
  .then(function (response) {
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error.data);
    r1=classList.toggle ('.no-display')
  })






}

