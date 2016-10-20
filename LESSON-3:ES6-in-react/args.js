function add (x, y, z) {
	console.log(x)
	console.log(y)
	console.log(z)
}

add(1, 2, 3)

add(1, 2)

add()

add(1, 2, 3, 4, 5, 6)

function add2(x, y) {
	if(y === undefined) {
		y = 5
	}
	return x + y
}

console.log(add2(4))

function add3(x, y) {
	y = y || 5
	return x + y
}

console.log(add3(4, 0))

//Both functions above are not good solutions. Better to use:

function add4(x, y = 5) {
	return x + y
}

console.log(add4(1))
