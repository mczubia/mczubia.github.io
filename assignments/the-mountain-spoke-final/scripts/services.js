var section = document.querySelector('section');
var requestURL = 'https://mczubia.github.io/assignments/json-data/service-data%202.json';
var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
        
    request.onload = function() {
    var repairServ = request.response;
    showData(townInfo);
        }
        
    function showData(jsonObj) {
        var services = jsonObj['repairs'];
        
      // 333333333333333;
        
        for (var i = 0; i < cities.length; i++) {
           if(i == 2) continue ; 
            

    var myArticle = document.createElement('article');
            var myH2 = document.createElement('h2');
            var myH3 = document.createElement('h3');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');
            var myList = document.createElement('ul');

            myH2.textContent = services[i].package;
            myH3.textContent = '' + services[i].slogan;
            myPara1.textContent = 'Prices: ' + services[i].price;
            myPara2.textContent = 'Includes: ';
            ;
            
            var PackInclude = services[i].includes;
            for (var j = 0; j < PackInclude.length; j++) {
              var listItem = document.createElement('li');
              listItem.textContent = PackInclude[j];
              myList.appendChild(listItem);
            }

    myArticle.appendChild(myH2);
            myArticle.appendChild(myH3);
            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myList);

            section.appendChild(myArticle);
  }
}