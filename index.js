const request = require('request');
const fs = require('fs');
const readline = require('readline');

const url = process.argv[2];
const localFilePath = process.argv[3];

// Edge case 2: file path is invalid
if (!fs.existsSync(localFilePath)) {
  console.error('Invalid file path.');
  process.exit();
}


request(url, (error, response, body) => {
  //Edge case 3: if url is invalid
  if (error) {
    console.error(`Error: ${error}`);
    process.exit(1);
  }
  else {
    console.log('error:', error);
    console.log('statusCode:', response && response.statusCode);
    console.log('body:', body);
  }

  fs.writeFile(localFilePath, body, (error) => {
    if (error) {
      console.error(`Error writing file: ${error}`);
      process.exit();
    } else {
      console.log(`Downloaded and saved ${body.length} bytes to ${localFilePath}.`);
    }
  });

});