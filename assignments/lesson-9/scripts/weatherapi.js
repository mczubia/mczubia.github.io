/*var weatherRequest= new XMLHttpRequest
weatherRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4156210&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

weatherRequest.send();

weatherRequest.onload= function() {
   var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
}*/

var weatherObject= new XMLHttpRequest
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4156210&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);


//4623560
weatherObject.send();

weatherObject.onload= function() {
    
    
    
   var weatherInfo= JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML= weatherInfo.name;
    
    document.getElementById('weatherDesc').innerHTML= weatherInfo.weather[0].main;
    
    document.getElementById('highTemp').innerHTML= weatherInfo.main.temp_max;
    
    document.getElementById('lowTemp').innerHTML= weatherInfo.main.temp_min;
    
    document.getElementById('currentTemp').innerHTML= weatherInfo.main.temp;
    
    document.getElementById('currentWind').innerHTML= weatherInfo.wind.speed;
    
    
    
    var iconcode= weatherInfo.weather[0].icon;
    
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon').src= icon_path;
}
//end of the function


//remove http just before loading to GitHub or page won't work on