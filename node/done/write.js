var fs = require("fs");

var data = 'praveen nerkar';

var writerStream = fs.createWriteStream('out.txt');

writerStream.write(data, 'UTF8');

writerStream.end();


writerStream.on('finish', function() { 
console.log('writing finished');
});

writerStream.on('error', function(err) {
console.log(err.stack);

});
console.log('program end........');
