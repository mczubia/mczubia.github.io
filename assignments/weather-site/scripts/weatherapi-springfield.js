/*var weatherRequest= new XMLHttpRequest
weatherRequest.open('GET', '//api.openweathermap.org/data/2.5/weather?id=4156210&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

weatherRequest.send();

weatherRequest.onload= function() {
   var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
}*/

var weatherObject= new XMLHttpRequest
weatherObject.open('GET','//api.openweathermap.org/data/2.5/weather?id=4409896&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

//Springfield MO 4409896

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
weatherForecast.open('GET','//api.openweathermap.org/data/2.5/forecast?id=4409896&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);


weatherForecast.send();

weatherForecast.onload= function() {
    
    
    
   var weatherInfo= JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);
    document.getElementById('dayonetempz1').innerHTML= weatherInfo.list["0"].main.temp;
    
     document.getElementById('daytwotempz2').innerHTML= weatherInfo.list[1].main.temp;
    
     document.getElementById('daythreetempz3').innerHTML= weatherInfo.list[2].main.temp;
    
     document.getElementById('dayfourtempz4').innerHTML= weatherInfo.list[3].main.temp;
    
     document.getElementById('dayfivetempz5').innerHTML= weatherInfo.list[4].main.temp;
    
    
    
      var weatherInfo= JSON.parse(weatherForecast.responseText);
    console.log(weatherInfo);
    document.getElementById('dayonetempy1').innerHTML= weatherInfo.list["0"].main.temp_max;
    
     document.getElementById('daytwotempy2').innerHTML= weatherInfo.list[1].main.temp_max;
    
     document.getElementById('daythreetempy3').innerHTML= weatherInfo.list[2].main.temp_max;
    
     document.getElementById('dayfourtempy4').innerHTML= weatherInfo.list[3].main.temp_max;
    
     document.getElementById('dayfivetempy5').innerHTML= weatherInfo.list[4].main.temp_max;
    
    
    
     document.getElementById('dayonetempx1').innerHTML= weatherInfo.list["0"].main.temp_min;
    
     document.getElementById('daytwotempx2').innerHTML= weatherInfo.list[1].main.temp_min;
    
     document.getElementById('daythreetempx3').innerHTML= weatherInfo.list[2].main.temp_min;
    
     document.getElementById('dayfourtempx4').innerHTML= weatherInfo.list[3].main.temp_min;
    
     document.getElementById('dayfivetempx5').innerHTML= weatherInfo.list[4].main.temp_min;
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