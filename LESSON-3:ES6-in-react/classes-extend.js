class Creature {
	constructor(name) {
		this.name = name
	}

	sayName() {
		console.log(`My name is ${this.name}`)
	}
}


class Person extends Creature {
	constructor(name, job) {
		super(name)
		this.job = job
	}
}

class Dog extends Creature {}

var p1 = new Person('Alberto', 'Software Engineer')

console.log(p1.name)
console.log(p1.job)
console.log(p1.sayName === Creature.prototype.sayName);

p1.sayName()


