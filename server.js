const express = require('express')
const app = express()
var http = require("http")
, url  = require('url');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('', __dirname + '/');
app.set('view engine', 'ejs');

app.use(bodyParser.json());


app.listen(3000, function () {})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/gopostal', function (req, res) {
	var queryData = url.parse(req.url, true).query;
	var weight = queryData.weight;
	var type = queryData.mail_type;
  var params = {weight: weight, type: type};
  res.render('results', params);
    
    function calculateRate(weight,type)
{
    if (type == 'stamped')
        {
            if (weight <= 1)
                {
                    cost = '$0.49'
                    return cost
                }
            
            if (weight > 1 <= 2)
                {
                    cost = '$0.70'  
                    return cost                  
                }
            
            if (weight > 2 <= 3)
                {
                    cost = '$0.91'
                    return cost
                }
            
            if (weight > 3 <= 3.5)
                {
                    cost = '$1.12'
                    return cost
                }
        }
    
    if (type == 'metered')
        {
            if (weight <= 1)
                {
                    cost = '$0.49'
                    return cost
                }
            
            if (weight > 1 <= 2)
                {
                    cost = '$0.70'  
                    return cost                  
                }
            
            if (weight > 2 <= 3)
                {
                    cost = '$0.91'
                    return cost
                }
            
            if (weight > 3 <= 3.5)
                {
                    cost = '$1.12'
                    return cost
                }
        }
    
    if (type == 'large')
        {
            
            if (weight <= 1)
                {
                    cost = '$0.98'
                    return cost
                }
            
            if (weight > 1 <= 2)
                {
                    cost = '$1.19'  
                    return cost                  
                }
            
            if (weight > 2 <= 3)
                {
                    cost = '$1.40'
                    return cost
                }
            
            if (weight > 3 <= 4)
                {
                    cost = '$1.61'
                    return cost
                }
            
            if (weight > 4 <= 5)
                {
                    cost = '$1.82'
                    return cost
                }
            
            if (weight > 5 <= 6)
                {
                    cost = '$2.03'
                    return cost
                }
            
            if (weight > 6 <= 7)
                {
                    cost = '$2.24'
                    return cost
                }
            
            if (weight > 7 <= 8)
                {
                    cost = '$2.45'
                    return cost
                }
            
            if (weight > 8 <= 9)
                {
                    cost = '$2.66'
                    return cost
                }
            
            if (weight > 9 <= 10)
                {
                    cost = '$2.87'
                    return cost
                }
            
            if (weight > 10 <= 11)
                {
                    cost = '$3.08'
                    return cost
                }
            
            if (weight > 11 <= 12)
                {
                    cost = '$3.29'
                    return cost
                }
            
            if (weight > 12 <= 13)
                {
                    cost = '$3.50'
                    return cost
                }
        }
    
    if (type == 'parcel')
        {
            
            if (weight <= 1)
                {
                    cost = '$2.67'
                    return cost
                }
            
            if (weight > 1 <= 2)
                {
                    cost = '$2.67'  
                    return cost                  
                }
            
            if (weight > 2 <= 3)
                {
                    cost = '$2.67'
                    return cost
                }
            
            if (weight > 3 <= 4)
                {
                    cost = '$2.67'
                    return cost
                }
            
            if (weight > 4 <= 5)
                {
                    cost = '$2.85'
                    return cost
                }
            
            if (weight > 5 <= 6)
                {
                    cost = '$3.03'
                    return cost
                }
            
            if (weight > 6 <= 7)
                {
                    cost = '$3.21'
                    return cost
                }
            
            if (weight > 7 <= 8)
                {
                    cost = '$3.39'
                    return cost
                }
            
            if (weight > 8 <= 9)
                {
                    cost = '$3.57'
                    return cost
                }
            
            if (weight > 9 <= 10)
                {
                    cost = '$3.75'
                    return cost
                }
            
            if (weight > 10 <= 11)
                {
                    cost = '$3.93'
                    return cost
                }
            
            if (weight > 11 <= 12)
                {
                    cost = '$4.11'
                    return cost
                }
            
            if (weight > 12 <= 13)
                {
                    cost = '$4.29'
                    return cost
                }
        }
}


var cost = calculateRate(weight, type)
console.log("Weight: " + weight + " Type: " + type + " Cost: " + cost)

})

app.use(express.static('C:\wapp\apache2\htdocs\cs313-php\w9\gopostal'))