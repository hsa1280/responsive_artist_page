var express = require("express");
var app = express();

var querystring = require('querystring');
var https = require('https');

var host = 'api2.iheart.com';

function performRequest(endpoint, method, data, success) {
  var dataString = JSON.stringify(data);
  var headers = {};

  endpoint += '?' + querystring.stringify(data);
  headers = {
    'Content-Type': 'application/json',
  };

  var options = {
    host: host,
    path: endpoint,
    headers: headers
  };

  var req = https.get(options, function(res) {
    res.setEncoding('utf-8');

    var responseString = '';

    res.on('data', function(data) {
      console.log("data in res.on() ---> ", data);
      responseString += data;
    });

    res.on('end', function() {
      var responseObject = JSON.parse(responseString);
      success(responseObject);
      req.end();
    });
  });
}

app.get('/data', function(req, res){
  performRequest('/api/v1/catalog/searchAll/', 'GET', {
    keywords: req.query.word,
    queryTrack: false,
    queryBundle: false,
    queryArtist: true,
    queryStation: false,
    queryFeatureStation: false,
    queryTalkShow: false,
    queryTalkTheme: false,
    queryKeyword: false,
    countryCode: 'US'
  }, function(data) {
    res.send(data);
  });
});

app.use(express.static('src/webapp'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});



