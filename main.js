

const fs = require('fs');
const { Transform } = require('stream');

function processData(inputFilePath, outputFilePath) {
  const fileStream = fs.createReadStream(inputFilePath);
  const transformedData = fs.createWriteStream(outputFilePath);

  const passThrough = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk);
    },
  });

  fileStream.pipe(passThrough).pipe(transformedData);
}

processData('input.txt', 'output.txt');
