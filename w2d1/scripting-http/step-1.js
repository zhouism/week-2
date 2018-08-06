var https = require('https');

var data = '';

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received:', data);
    });

    response.on('end', function() {
      console.log("Response stream complete:", data);
    });
  });

}

console.log(getAndPrintHTMLChunks(data));
//console.log("Program Ended");