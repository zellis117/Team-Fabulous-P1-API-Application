
var currentTemp = document.getElementById("current-temp");
var currentWind = document.getElementById('current-wind');
var currentHumidity = document.getElementById('current-humidity');
var userDate = document.getElementById('user-date');
var citySelection = 'Fayetteville, NC'
var userState = document.querySelector('#user-state'); //State search input field
var userPark = document.querySelector('#user-park'); //Park search input field
var userDate = document.querySelector('#user-date'); //Date search input field
var submit = document.querySelector('#submitBtn'); //Submit button for search input fields
var date = moment().format('YYYY-MM-DD');
var dateMax = moment().add(4,'days').format('YYYY-MM-DD');

function getFiveDay() {
    var fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?lat='+cityLat+'&lon='+cityLon+'&units=imperial&appid=44ff41a4d8b49abe43f662ec93cbb1a6';
    fetch(fiveDayApi) 
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log('forecast data')
    console.log(data);
    for (i = 0, j =0; i < 40; i += 8, j++) {
        var iconcode = data.list[i].weather[0].icon
        var iconurl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
        var weatherDate = data.list[i].dt * 1000
        weatherDate = new Date(weatherDate);
        weatherDate = weatherDate.toLocaleString('en-US');
        weatherDate = weatherDate.split(',');
        document.getElementById(dailyIcons[j]).setAttribute('src', iconurl);
        document.getElementById(dailyDates[j]).innerHTML = weatherDate[0];
        document.getElementById(dailyTemps[j]).innerHTML = 'Temp: ' + data.list[i].main.temp + '&deg; fahrenheit';
        document.getElementById(dailyWind[j]).innerHTML = 'Wind: ' + data.list[i].wind.speed + 'Mph';
        document.getElementById(dailyHumidity[j]).innerHTML ='Humidity: ' + data.list[i].main.humidity + '%';
       
        var weatherDate = data.list[i].dt * 1000
        weatherDate = new Date(weatherDate);
        weatherDate = weatherDate.toLocaleString('en-US');
        weatherDate = weatherDate.split(',');
        
    }
    })
}



function displayWeather() {
        
    if (citySelection === '') { return }
    var geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q='+citySelection+',US&limit=1&appid=44ff41a4d8b49abe43f662ec93cbb1a6';
    console.log(citySelection);
    
    fetch(geoApi)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log('geocoding data')
        console.log(data);
        var cityLat = data[0].lat;
        var cityLon = data[0].lon;
        console.log(cityLat,cityLon);

        function getFiveDay() {
            var fiveDayApi = 'https://api.openweathermap.org/data/2.5/forecast?lat='+cityLat+'&lon='+cityLon+'&units=imperial&appid=44ff41a4d8b49abe43f662ec93cbb1a6';
            fetch(fiveDayApi) 
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log('forecast data')
            console.log(data);
            for (i = 0; i < 40; i += 8) {
                var iconcode = data.list[i].weather[0].icon
                var iconurl = "https://openweathermap.org/img/wn/" + iconcode + ".png";
                var weatherDate = data.list[i].dt * 1000
                var date_ob = new Date(weatherDate);

                var year = date_ob.getFullYear();
                var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
                var date = ("0" + date_ob.getDate()).slice(-2);
                
                var forecastDate = year + "-" + month + "-" + date;
                console.log(forecastDate);
                // weatherDate = new Date(weatherDate);
                // weatherDate = weatherDate.toLocaleString('en-US');
                // weatherDate = weatherDate.split(',');
                // console.log(weatherDate[0])
                console.log(userDate.value)
                if (userDate.value === forecastDate){
                // if (chosenDate === )
                $('#icon').attr('src', iconurl);
                currentTemp.innerHTML = 'Temp: ' + data.list[i].main.temp + '&deg; fahrenheit';
                currentWind.innerHTML = 'Wind: ' + data.list[i].wind.speed + 'Mph';
                currentHumidity.innerHTML ='Humidity: ' + data.list[i].main.humidity + '%';
                }
            }
            })
        }

        getFiveDay();
    })
}

//Project 1 - Team Fabulous

//Call to park API to get park info
var getParkData = function(){
  //Fetch park API
}

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