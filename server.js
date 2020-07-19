// file should include the following:
var express = require('express');
var app = express();
var serveStatic = require('serve-static');
var path = require('path');

app.use(serveStatic(path.join(__dirname, 'build')))

//you can change the port to anything above '3000'
app.listen(process.env.PORT || 3001, () => {
	console.log('server lister');
});
