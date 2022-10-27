//Project 1 - Team Fabulous
//Selectors for HTML Elements
var userState = document.querySelector('#user-state'); //State search input field
var userPark = document.querySelector('#user-park'); //Park search input field
var userDate = document.querySelector('#user-date'); //Date search input field
var submit = document.querySelector('#submitBtn'); //Submit button for search input fields
var weatherDisplay = document.querySelector('#weather-display'); //Display container for selected day's weather

var date = moment().format('YYYY-MM-DD');
var dateMax = moment().add(4,'days').format('YYYY-MM-DD');

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
    //Fetch park API
    fetch(parkUrl)
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      console.log(data);
      console.log(parkName);
      /*
      Tony's stuff goes here
      */
    })
    .catch(function (error) {
      alert('It didnt work');
    });
  } else if(stateCode !== "") {
    fetch(stateUrl)
    .then(function (response){
      return response.json();
    })
    .then(function (data){
      console.log(data);
      console.log(stateCode);
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
console.log(date);
console.log(dateMax);
console.log(userDate.Value);
updateDate();
submit.addEventListener("click", getParkData);
