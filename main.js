console.log("Hello JS")



// variables
var myFirstVar = 23

myFirstVar = myFirstVar + 3

console.log(myFirstVar)


// types

//number 
var myFirstVar = 23

// string 
var myString = "Hello guys"

// boolean 
var myBoolean = true



// arrays
var myFirstArr = [23, 54, 99, 12]
myFirstArr.push(76)
console.log(myFirstArr)

var mySecArr = ["Jost", "Ottavia", "Lucas"]
// mySecArr.pop()
console.log(mySecArr[0])



// objects
var myCar = {
    brand: "BMW",
    color: "red",
    doors: 4
}

var myOtherCar = {
    brand: "Tesla",
    color: "white",
    doors: 4
}
myCar.color = "black"
console.log(myCar);

var myCars = []
myCars.push(myCar)
myCars.push(myOtherCar)
console.log(myCars)

// conditional operators
if (myFirstVar === "23") {
    console.log("same")
}

if (!myBoolean) {
    console.log('yay')
}


if (myFirstVar === 24) {
    console.log("true")
}
else if (myFirstVar === 23) {
    console.log("else if!")
}
else {
    console.log("false")
}


//loops
// Do
console.log(mySecArr.length)

for (var i = 0; i < mySecArr.length; i++) {
    console.log(mySecArr[i])
    if (mySecArr[i] === "Lucas") {
        console.log("Lucas is a index " + i)
    }
}

// Don't
var j = 10

while (j > 0) {
    console.log(j)
    j--


    break
}

var greeting = "Whatever"
var hiMessage = "Hi"


// functions
//definition
function showToConsole(msg, greeting) {
    console.log(greeting + msg)
}
//call
showToConsole()

//parameters
showToConsole("Im a parameter", "Howdie")

// return statement

function addTwoNumbers(a, b) {
    var result = a + b
    console.log(result)
    return result
}

var myResult = addTwoNumbers(5, 2)
console.log(myResult)

var myFunction = () => {

}