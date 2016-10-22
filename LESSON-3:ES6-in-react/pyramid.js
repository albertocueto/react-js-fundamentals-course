var fs = require('fs')

fs.readFile('./no-promises-script.js', function(err, data) {
	console.log('no-promises-script.js')
	fs.readFile('./pyramid.js', function(err, data) {
		console.log('pyramid.js')
	})
})
