//Project 1 - Team Fabulous
//Selectors for HTML Elements
var userState = document.querySelector('#user-state'); //State search input field
var userPark = document.querySelector('#user-park'); //Park search input field
var userDate = document.querySelector('#user-date'); //Date search input field
var submit = document.querySelector('#submitBtn'); //Submit button for search input fields
var weatherDisplay = document.querySelector('#weather-display'); //Display container for selected day's weather
var resultsDisplay = document.querySelector('#results-display'); //Displays buttons for results

//Variables for calendar
var date = moment().format('YYYY-MM-DD');
var dateMax = moment().add(4,'days').format('YYYY-MM-DD');

//Selectors for park information
var parkLocation = document.getElementById('park-location');
var parkActivities = document.getElementById('park-activities');
var parkAmenities = document.getElementById('park-amenities');
var parkCode = "";
//var parkLink = $('#park-url');

//Call to weather API to get forecast
var getWeatherData = function(park){
  //Weather API stuff
}

//Call to park API to get park info
var getParkData = function(event){
  event.preventDefault();
  var parkName = userPark.value.trim();
  var stateCode = userState.value;
  var stateUrl = 'https://developer.nps.gov/api/v1/parks?api_key=mQeAwUWTr41jOO5rCy7tm8oFaLVV4kFa7clCHQyI&limit=10&stateCode=' + stateCode;
  var parkUrl = 'https://developer.nps.gov/api/v1/parks?q='+ parkName +'&api_key=mQeAwUWTr41jOO5rCy7tm8oFaLVV4kFa7clCHQyI&limit=10';
  if(parkName !== ""){
    //Fetch park API when park name is searched
    fetch(parkUrl)
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      console.log(data);
      console.log(parkName);
      for(var i = 0; i<data.data.length; i++){
        var x = document.createElement('button');
        resultsDisplay.appendChild(x);
        x.innerHTML = data.data[i].fullName;
      }
      /*
      Tony's stuff goes here
      */
    })
    .catch(function (error) {
      alert('It didnt work');
    });
  } else if(stateCode !== "") {
    //Fetch park API when state is selected
    fetch(stateUrl)
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      console.log(data);
      console.log(stateCode);
      for(var i = 0; i<data.data.length; i++){
        var x = document.createElement('button');
        resultsDisplay.appendChild(x);
        x.innerHTML = data.data[i].fullName;
      }
      /*
      Tony's stuff goes here
      */
    })
    .catch(function (error) {
      alert('It didnt work');
    });
  } else {
    console.log("fix it!");
  }
}

//Displays information to the page
var getParkById = function(event){
  event.preventDefault();
  var parkCodeUrl = 'https://developer.nps.gov/api/v1/parks?api_key=mQeAwUWTr41jOO5rCy7tm8oFaLVV4kFa7clCHQyI&limit=1&parkCode=' + parkCode;

  //Fetches park info based on specific park code
  fetch(parkCodeUrl)
  .then(function (response){
    return response.json();
  })
  .then(function (data){
    var parkLat = data.data[0].latitude
          var parkLon = data.data[0].longitude
          console.log(parkLat, parkLon)
          parkName.innerHTML = data.data[0].fullName
          parkLocation.innerHTML = data.data[0].addresses[0].line1 + ' ' + data.data[0].addresses[0].city + ', ' + data.data[0].addresses[0].stateCode;
          parkActivities.innerHTML = data.data[0].activities[0].name;
          for (i = 1; i < data.data[0].activities.length; i++) {
            parkActivities.innerHTML = parkActivities.innerHTML + ', ' + data.data[0].activities[i].name
          }
          //parkLink.attr('href', data.data[0].url)
  })
  .catch(function (error){
    alert('It didnt work');
  })
}

//Saves park name to local storage
var savePark = function(){
  //Get park name & date
  //Save Date of planned trip
  //Save park name to local storage
}

//Updates date on calendar
var updateDate = function(){
  userDate.min = date;
  userDate.max = dateMax;
}

//Listeners for inputs and button clicks
console.log(date);
console.log(dateMax);
console.log(userDate.Value);
updateDate();
submit.addEventListener("click", getParkData);

////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById('current-wind');
var currentHumidity = document.getElementById('current-humidity');
var userState = document.querySelector('#user-state'); //State search input field
var userPark = document.querySelector('#user-park'); //Park search input field
var userDate = document.querySelector('#user-date'); //Date search input field
var submit = document.querySelector('#submitBtn'); //Submit button for search input fields
var date = moment().format('YYYY-MM-DD');
var dateMax = moment().add(4,'days').format('YYYY-MM-DD');
var parkName = document.getElementById('park-name');
var parkLocation = document.getElementById('park-location');
var parkActivities = document.getElementById('park-activities');
var parkAmenities = document.getElementById('park-amenities');
var parkLink = $('#park-url');

// Fetches park data based on park code, then fetches weather for chosen date using park coordinates
    var getParkData = function(event) {

        event.preventDefault();
        var parkName = userPark.value.trim();
        var parkUrl = 'https://developer.nps.gov/api/v1/parks?parkCode='+ parkName +'&api_key=mQeAwUWTr41jOO5rCy7tm8oFaLVV4kFa7clCHQyI';
        //Fetch park API
        fetch(parkUrl)
        .then(function (response){
          return response.json();
        })
        .then(function (data){
          console.log(data);
          console.log(parkName);
          var parkLat = data.data[0].latitude
          var parkLon = data.data[0].longitude
          console.log(parkLat, parkLon)
          parkName.innerHTML = data.data[0].fullName
          parkLocation.innerHTML = data.data[0].addresses[0].line1 + ' ' + data.data[0].addresses[0].city + ', ' + data.data[0].addresses[0].stateCode;
          parkActivities.innerHTML = data.data[0].activities[0].name;
          for (i = 1; i < data.data[0].activities.length; i++) {
            parkActivities.innerHTML = parkActivities.innerHTML + ', ' + data.data[0].activities[i].name
          }
          parkLink.attr('href', data.data[0].url)

          function getFiveDay() {
            var fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?lat='+parkLat+'&lon='+parkLon+'&units=imperial&appid=44ff41a4d8b49abe43f662ec93cbb1a6';
            fetch(fiveDayApi) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (i = 0; i < 40; i += 8) {
                var iconcode = data.list[i].weather[0].icon
                var iconurl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                var weatherDate = data.list[i].dt * 1000
                var date_ob = new Date(weatherDate);
                var year = date_ob.getFullYear();
                var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                var date = ("0" + date_ob.getDate()).slice(-2);
                var forecastDate = year + "-" + month + "-" + date;
                if (userDate.value === forecastDate){
                $('#icon').attr('src', iconurl);
                currentTemp.innerHTML = 'Temp: ' + data.list[i].main.temp + '&deg; fahrenheit';
                currentWind.innerHTML = 'Wind: ' + data.list[i].wind.speed + 'Mph';
                currentHumidity.innerHTML ='Humidity: ' + data.list[i].main.humidity + '%';
                }
            }
            })
        }

        getFiveDay()
        })
      //   .catch(function (error) {
      //     alert('It didnt work');
      //   });
      }
    

//---------------------------------------------------------------------

//Call to weather API to get forecast
var getWeatherData = function(park){
  //Weather API stuff
}

//Displays information to the page
var getInfo = function(){
  getParkData(userPark.value.trim());
}

//Saves park name to local storage
var savePark = function(){
  //Get park name & date
  //Save Date of planned trip
  //Save park name to local storage
}

//Updates date on calendar
var updateDate = function(){
  userDate.min = date;
  userDate.max = dateMax;
}

//Listeners for inputs and button clicks
updateDate();
submit.addEventListener("click", getParkData);
//Project 1 - Team Fabulous

//Displays information to the page
var displayData = function(){
  //Append child in HTML
}

//Saves park name to local storage
var savePark = function(){
  //Get park name & date
  //Save Date of planned trip
  //Save park name to local storage
}

//Updates date on calendar
var updateDate = function(){
  userDate.min = date;
  userDate.max = dateMax;
}

//Listeners for inputs and button clicks
console.log(date);
console.log(dateMax);
updateDate();
*/
