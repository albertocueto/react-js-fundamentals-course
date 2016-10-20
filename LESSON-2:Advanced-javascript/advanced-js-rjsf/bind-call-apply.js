'use strict'
function Person (name, age) {
	this.name = name;
	this.age = age;
}

Person.prototype.sayName = function(x) {
	console.log('Hello, my name is ' + this.name);
	console.log(x);
}

var p1 = new Person('Alberto', 30);
var p2 = new Person('Diana', 30);
p1.sayName();

var sayName = p1.sayName;
//sayName(); //Error, this not set

sayName.call(p1, 'hello'); //Setting this to p1
sayName.call(p2); //Setting this to p2
sayName.call({name: 'Haku'});
sayName.apply(p1, ['hello']);

//sayName(); //Doesn't work, this was set only for that moment

var boundSayName = sayName.bind(p1, 'hello friend');

boundSayName();
