class Person {
	//these always use strict mode
	constructor(name) {
		this.name = name
	}
	
	//No need to state the function, implicit wit es6:
	sayName() {
		console.log(`My name is ${this.name}`)
	}
}


//Old javascript way:
//function Person() {
//	this.name = name
//}

//Person.prototype.sayName

var p1 = new Person('Cueto')
p1.sayName()

console.log(Person)

console.log(p1.__proto__ == Person.prototype)
console.log(p1.sayName == Person.prototype.sayName)

var sayName = p1.sayName
//sayName()
