function promiseReadFile(file) {
}

console.log(1)

var myPromise = new Promise((resolve, reject) => {
	//async code in here
	console.log(2)
	var noErrors = true
	//var noErrors = false
	if(noErrors) {
		console.log(3)
		resolve('payload data')
	} 
	else {
		reject()
	}
})

/*promiseReadFile('filePath')
.then(data => {
})
.then(data => {

})*/
console.log(4)
myPromise.then(payload => {
	console.log(5)
	console.log(payload)
	console.log('success!')
}).catch(() => {
	console.log('failure!')
})
