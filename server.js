var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var querystring = require('querystring');
var https = require('https');

var host = 'api2.iheart.com';

function performRequest(endpoint, method, data, success) {
  var headers = {};

  //convert javascript object to query string
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

//serve static folder, localhost:3000 points to src/webapp,
app.use(express.static('src/webapp'));

app.listen(port, () => {
  console.log('App listening on port ' + port);
});
