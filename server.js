var express = require('express');
var path = require('path');
var app = express();
// dipal - 
// var hypernova = require('hypernova/server');

// hypernova({
//   devMode: true,

//   getComponent(name) {
//     if (name === 'MyComponent.js') {
//       return require('./app/assets/javascripts/MyComponent.js');
//     }
//     return null;
//   },

//   port: 3030,
// });

app.set('port', 3000);
app.use(express.static(path.join(__dirname, 'dist')));

// Listen for requests
var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Application running in http://localhost:' + port);
});