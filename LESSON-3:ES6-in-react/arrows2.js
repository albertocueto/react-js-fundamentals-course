function Person(name) {
	this.name = name
}

Person.prototype.sayNameTimed = function() {
	//This is a trick to avoid this being undefined
	//var self = this
	//setTimeout(function() {
	//This hasn't been set in this call, because we are inside the function
	//	console.log(`My name is ${this.name}`)
	//	console.log(`My name is ${self.name}`)
	//}, 1000)
	//}.bind(this), 100) //Binding the call to "this" is another trick to avoid that undefined
	
	//Best solution:
	//The arrow function by itself realizes that this is undefined and looks at the enclosing context to find it
	setTimeout(() => {
		console.log(`My name is ${this.name}`)
	}, 1000)
}

var p1 = new Person('Cueto')
p1.sayNameTimed()
