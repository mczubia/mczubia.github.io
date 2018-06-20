var weatherObject= new XMLHttpRequest
weatherObject.open('GET', 'http://api.openweathermap.org/data/2.5/weather?zip=37027,us&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

weatherObject.send();

weatherObject.onload= function() {
   var weatherInfo= JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML= weatherInfo.name;
    document.getElementById('currentTemp').innerHTML= weatherInfo.main.temp;
    document.getElementById('currentWind').innerHTML= weatherInfo.wind.speed;
    
    var iconcode= weatherInfo.weather[0].icon;
    
    var icon_path= "http://openweathermap.org/img/w/"+ iconcode +".png";
    document.getElementById('weather_icon').src= icon_path;
}//end of the function


//remove http just before loading to GitHub or page won't work on