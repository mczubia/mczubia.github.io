var weatherRequest= new XMLHttpRequest
weatherRequest.open('GET', 'http://api.openweathermap.org/data/2.5/weather?id=4156210&appid=4f59fd300aa5f89148c3195a3f920e62&units=imperial',true);

weatherRequest.send();

weatherRequest.onload= function() {
   var weatherData= JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("current-temp").innerHTML= weatherData.main.temp;
}