var fs = require("fs");
fs.readFile("test.txt", 'utf-8', function (error, data) {
    console.log( "File content: " + data);
});




