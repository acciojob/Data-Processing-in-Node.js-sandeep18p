const fs = require('fs');
const { Transform } = require('stream');

function processData(inputFilePath, outputFilePath) {
  const fileStream = fs.createReadStream(inputFilePath);
  const transformedData = fs.createWriteStream(outputFilePath);

  const uppercase = new Transform({
    transform(chunk, encoding, callback) {
      callback(null, chunk.toString().toUpperCase());
    },
  });

  fileStream.pipe(uppercase).pipe(transformedData);
}

processData('input.txt', 'output.txt');
