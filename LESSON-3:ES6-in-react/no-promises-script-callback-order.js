var fs  = require('fs')

fs.readFile('./no-promises-script.js', function(err, data) {
	console.log(3);
	if(err) {
		console.log(err)
		return
	}
	console.log(data)
})

function helper() {
	console.log(2)
	fs.readFile('./no-promises-script.js', function(err, data) {
		console.log(4)
		if(err) {
			console.log(err)
		}
		console.log(data)
	})
}

function main() {
	console.log(1)
	helper()
}

main()
