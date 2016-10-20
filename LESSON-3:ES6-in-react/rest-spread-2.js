function helloGoodbye(greeting, goodbye, names) {
	names.forEach(function(name) {
		console.log(`${greeting} ${name}!`)
        	console.log(`${goodbye} ${name}.`)
	})
}

helloGoodbye('hi', 'bye', ['Cueto', 'Alberto', 'José'])

function helloGoodbye2(greeting, goodbye) {
	console.log(arguments)
	var names = Array.prototype.slice.call(arguments, 2)
	console.log(names)
}

helloGoodbye2('Hi', 'Bye', 'José', 'Alberto', 'Cueto')

function helloGoodbye3(greeting, goodbye, ...names) {
        names.forEach(function(name) {
		console.log(`${greeting} ${name}!`)
                console.log(`${goodbye} ${name}.`)
	})
}

helloGoodbye3('Hello', 'Goodbye', 'José', 'Alberto', 'Cueto')
var chats = ['Hello', 'Goodbye']
helloGoodbye3(...chats, 'JOSÉ', 'ALBERTO', 'CUETO')
