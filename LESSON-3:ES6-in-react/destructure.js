var numbers = [5, 10]
var number1 = numbers[0]
var number2 = numbers[1]

[number1, number2] = numbers

console.log(number1)
console.log(number2)

//Doesn't seem to work on my node version, but it should work on the browser:
//[number1, number2] = [number1, number2]

//console.log(number1)
//console.log(number2)
