var https = require('https');

function getHTML (options, callback) {

    https.get(requestOptions, function (response) {
    response.setEncoding('utf8');

    //callback function was here

    response.on('end', function() {
      console.log('Data stream complete.');
    });
  });

}

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);

var data = '';

var options = {};

var callback = function html() {
  response.on('data', function (chunk) {
      console.log('Data Chunked:', data += chunk);
    });
}