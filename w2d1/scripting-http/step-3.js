function getAndPrintHTML (options) {

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    // response.on('data', function (chunk) {
    //   console.log('Chunk Received:', data += chunk);
    // });

    response.on('data', function (chunk) {
      for (var i = 0; i < data.length; i++) {
        var dataChunked = data;
      }
      console.log('Data Chunked:', data += chunk);
    });

    response.on('end', function() {
      console.log('Data stream complete.');
    });
  });

}

var https = require('https');

var data = '';

var options = {};

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


console.log(getAndPrintHTML(options));