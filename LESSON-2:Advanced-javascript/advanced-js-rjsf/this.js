'use strict'
function Person(name, age) {
	/* behind the scenes *
 	* this = {}
 	* setup inher
	* */
	this.name = name;
	this.age = age;
	/*this.sayName = function() {
		console.log('Hello my name is ' + this.name);
	}*/ /* Undesirable, multiple function on memory*/
	
}


/* Right way to go, the function only exists on the prototype. Multiple instances of the same object share the same function: */
Person.prototype.sayName = function() {
	console.log('Hello my name is ' + this.name);
}

var p1 = new Person('Alberto', 30);
var p2 = new Person('Diana', 30);

console.log(p1);
console.log(p2);

p1.sayName();
p2.sayName();

var name = p1.name;
var sayName = p1.sayName;

console.log(sayName);

//sayName(); //Error, nothing set the value of 'this'

