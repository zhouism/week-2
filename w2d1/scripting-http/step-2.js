var https = require('https');

var data = '';

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    // response.on('data', function (chunk) {
    //   console.log('Chunk Received:', data += chunk);
    // });

    response.on('data', function (chunk) {
      data += chunk;
    });

    response.on('end', function() {
      console.log('Data stream complete.');
    });
  });

}

console.log(getAndPrintHTML(data));