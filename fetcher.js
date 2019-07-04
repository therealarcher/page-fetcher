site = process.argv[2];
file = process.argv[3];
//console.log(site);
const fs = require('fs');
//var net = require('net');

const request = require('request');
request(site, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for requested homepage.
  fs.writeFile(file, body, err => {
    if (err) {
      console.log(err);
    } else {
      console.log('successfull');
    }
  }); //options & callback unknown
  //console.log(fs);
});


//fs.readFile(fileName [options], callback)

// got to "edge cases"