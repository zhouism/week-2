function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};


//getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {
  var https = require('https');

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
};