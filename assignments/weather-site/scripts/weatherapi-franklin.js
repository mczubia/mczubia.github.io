

var weatherObject= new XMLHttpRequest
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4759986&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

//Franklin VA  4759986

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
    
    
    
    //forecast
    
    document.getElementById('dayonetemp').innerHTML= weatherInfo.main.temp;
    
     document.getElementById('daytwotemp').innerHTML= weatherInfo.main.temp;
    
     document.getElementById('daythreetemp').innerHTML= weatherInfo.main.temp;
    
     document.getElementById('dayfourtemp').innerHTML= weatherInfo.main.temp;
    
     document.getElementById('dayfivetemp').innerHTML= weatherInfo.main.temp;
    
    
    
    //icons
    
        var iconcode= weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconone').src= icon_path;
    
     var iconcode= weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icontwo').src= icon_path;
    
     var iconcode= weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconthree').src= icon_path;
    
     var iconcode= weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconfour').src= icon_path;
    
     var iconcode= weatherInfo.weather[0].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconfive').src= icon_path;
}
//end of the function


//remove http just before loading to GitHub or page won't work on