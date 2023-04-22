const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  console.log('body:', body);

  fs.writeFile(localFilePath, body, (error) => {
    console.log(`Downloaded and saved 1235 bytes to ${localFilePath}.`);
  });

});