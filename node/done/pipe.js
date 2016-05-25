var fs =require('fs');

var writerStream = fs.createWriteStream('out.txt');
var readerStream = fs.createReadStream('input.txt');




readerStream.pipe(writerStream);
console.log('done');

