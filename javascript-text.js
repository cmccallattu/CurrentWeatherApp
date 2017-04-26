// Open weather API call link: 
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
// I ended up using the wunderground API as it had more expansive usage for development purposes

function currentWeather() {

$.get("https://ipinfo.io", function(response) {
    var latlon = response.loc;
    var latlonArray = latlon.split(",");
    var lat = Number(latlonArray[0]); //changed to convert to number to see if this was part of issue
    var lon = Number(latlonArray[1]);
  
    $.get("http://api.wunderground.com/api/2b342bc85c70e093/geolookup/q/"+lat+","+lon+".json", function(response) {
        var city = response.location.city;
        var state = response.location.state;
        var cityState = city+", "+state;
      
            $.get("http://api.wunderground.com/api/2b342bc85c70e093/conditions/q/"+state+"/"+city+".json", function(response){
              var tempF = response.current_observation.temp_f + "\xB0" + "F";
              var tempC = response.current_observation.temp_c + "\xB0" + "C";
              var weather = response.current_observation.weather;
              var weatherImg = response.current_observation.icon_url;
              var weatherImgAlt = "An image of the " + response.current_observation.icon + " weather in your area";
            
              document.getElementById("cityState").innerHTML = cityState;
              document.getElementById("tempF").innerHTML = tempF;
              document.getElementById("tempC").innerHTML = tempC;
              document.getElementById("weather").innerHTML = weather;
              $("#weatherImg").attr("src", weatherImg);
              $("#weatherImg").attr("alt", weatherImgAlt);
              
            }, "jsonp")
                  
      }, "jsonp")
  
  }, "jsonp")
  
}

/*document.getElementById("weather").innerHTML = cityLoc;
document.getElementById("weather").innerHTML = lon;
     
function oldWeather() {
  $.get("http://api.wunderground.com/api/2b342bc85c70e093/conditions/q/TX/Austin.json", function(response) {
    var cityLoc = "Temperature: " + response.current_observation.temp_f;
    document.getElementById("weather").innerHTML = cityLoc;
}, "jsonp")
}


function cityStateLoc() {
  $.get("http://api.wunderground.com/api/2b342bc85c70e093/geolookup/q/"+lat+","+lon+".json", function(response) {
        var city = response.location.city;
        var state = response.location.state;
      
        document.getElementById("weather").innerHTML = city + ", "+state;
  }, "jsonp")
}


function getLocation () {
$.get("")
}


function getWeather() {
      currentLocation();
      var weatherdata = {};
      weatherdata = $.get("api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&APPID=612a3b8a223da2e320764456e8c2cf59");
      document.getElementById("weather").innerHTML = weatherdata.main.temp;
};
*/
