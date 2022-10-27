//Project 1 - Team Fabulous
//Selectors for HTML Elements
var userState=document.getElementById('user-state') //State search input field
//state code= userState.value
var userPark = document.querySelector('#user-park'); //Park search input field
var userDate = document.querySelector('#user-date'); //Date search input field
var submit = document.querySelector('#submitBtn'); //Submit button for search input fields
var date = moment().format('YYYY-MM-DD');
var dateMax = moment().add(4,'days').format('YYYY-MM-DD');

//Call to weather API to get forecast
var getWeatherData = function(){
  //fetch weather API
}

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
  var stateSearchIndex=userState.selectedIndex;
  var stateSearch=userState[stateSearchIndex].text.trim();
  var parkSearch=userPark.value.trim();
  var datePicker=userDate.value;
  var dateYear=datePicker.slice(0,4)
  var dateStart=datePicker.slice(5,10)
  var dateSearch=dateStart+'-'+dateYear
  var currentSearch={stateSearch, parkSearch, dateSearch}
  if (dateSearch != '' && (stateSearchIndex >0 || parkSearch != '')) {
    var previousSearches = JSON.parse (window.localStorage.getItem ('previousSearches')) || [];
    previousSearches.push(currentSearch);
    if (previousSearches.length >10){
        previousSearches.shift();
       }
    window.localStorage.setItem ('previousSearches', JSON.stringify (previousSearches))
  }
}


//display search history
var showSearchHistory=function(){
  var previousSearches = JSON.parse(localStorage.getItem("previousSearches"))|| []; 
    if (previousSearches==[]){
        return;
    } else {
    for (var i=0; i<previousSearches.length; i++){
        var searchItem= document.createElement("li")
        searchItem.textContent=previousSearches[i].stateSearch + previousSearches[i].parkSearch + ', ' + previousSearches[i].dateSearch
        searchItem.style.listStyle="none";
        document.getElementById("search-history").appendChild (searchItem);
        }
    }

}

/*function displaySearches (){
    
}*/

//Updates date on calendar
var updateDate = function(){
  userDate.min = date;
  userDate.max = dateMax;
}

//Listeners for inputs and button clicks
console.log(date);
console.log(dateMax);
updateDate();