// file should include the following:
var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var path = require('path');
var fs = require('fs');

let fileIndex = null;
const filePath = `${__dirname}/build/index.html`;
fs.readFile(filePath, 'utf8', (err, data) => { fileIndex = data; });

app.use(serveStatic(path.join(__dirname, 'build')))
app.use('*', (req, resp) => resp.send(fileIndex));

//you can change the port to anything above '3000'
app.listen(process.env.PORT || 3001, () => {
	console.log('server lister');
});
