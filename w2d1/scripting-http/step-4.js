var https = require('https');

function getHTML (options, callback) {

    https.get(options, function (response) {
    var data = '';
    response.setEncoding('utf8');

    response.on('data', function (chunk) {
     data += chunk;
    });

    response.on('end', function() {
      console.log('Data stream complete.');
      callback(data);
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
function screamHTML(html){
  console.log('OMG', html.toUpperCase());
}
getHTML(requestOptions, printHTML)