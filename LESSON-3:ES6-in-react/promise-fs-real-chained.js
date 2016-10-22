var fs = require('fs')

function promiseFs(file) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, (err, data) => {
			if(err) {
				reject(err)
			}
			else {
				resolve(data)
			}
		})
	})
}


var promise2 = promiseFs('./pyramid.js')
	.then(data => {
		console.log('File 2 read')
		return promiseFs('./pyramid.js')
	})
	.then(data => {
		console.log('File 3 read')
	})
	.catch(err => {
		console.log(err)
	})



// the really condensed version of this: one line callbacks:

var p2 = promiseFs('./pyramid.js')
        .then(data => promiseFs('./pyramid.js'))
        .then(data => console.log(data.toString()))
        .catch(err => console.log(err))

