let req = new XMLHttpRequest();

req.open('GET', 'https://api.opendota.com/api/heroes');

req.send();

req.responseType = 'json';

req.onload = function() { 
    let responseObj = req.response; 
    console.log(responseObj.filter(item => item['primary_attr'] == 'str'));        
};



