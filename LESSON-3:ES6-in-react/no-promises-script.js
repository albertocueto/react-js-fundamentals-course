var fs = require('fs')

//Sync versions of operations are discouraged:
//var file = fs.readFileSync('./no-promises-script.js')
//console.log('The file using Sync:\n' + file.toString())

//The console log below won't work because readFile hasn't been able to load the file into the file2 variable since this is Async
//var file2 = fs.readFile('./no-promises-script.js')
//console.log('The file using Sync:\n' + file2)

//Proper way to do it with callbacks:
fs.readFile('./no-promises-script.js', function(err, data) {
	console.log(3)
	if(err) {
		//handle the err case:
		console.log(err)
		return
	}
	console.log('The file using Callback:\n' + data.toString())
})

console.log(1)
console.log(2)
