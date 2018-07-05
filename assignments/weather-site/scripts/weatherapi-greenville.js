var weatherObject= new XMLHttpRequest
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4695066&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

//Greenville TX 4695066

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
    
    //forecast
    var weatherForecast= new XMLHttpRequest
weatherForecast.open('GET','//api.openweathermap.org/data/2.5/forecast?id=4695066&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);


weatherForecast.send();

weatherForecast.onload= function() {
    
    
    
   var weatherInfo= JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);
    document.getElementById('dayonetemp').innerHTML= weatherInfo.list["0"].main.temp;
    
     document.getElementById('daytwotemp').innerHTML= weatherInfo.list[1].main.temp;
    
     document.getElementById('daythreetemp').innerHTML= weatherInfo.list[2].main.temp;
    
     document.getElementById('dayfourtemp').innerHTML= weatherInfo.list[3].main.temp;
    
     document.getElementById('dayfivetemp').innerHTML= weatherInfo.list[4].main.temp;
    
    
    
    //icons
    
        var iconcode= weatherInfo.list["0"].weather["0"].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconone').src= icon_path;
    
     var iconcode= weatherInfo.list[1].weather["0"].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icontwo').src= icon_path;
    
     var iconcode= weatherInfo.list[2].weather["0"].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconthree').src= icon_path;
    
     var iconcode= weatherInfo.list[3].weather["0"].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconfour').src= icon_path;
    
     var iconcode= weatherInfo.list[4].weather["0"].icon;
    var icon_path= "//openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_iconfive').src= icon_path;
}
//end of the function


//remove http just before loading to GitHub or page won't work on