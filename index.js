// Part 1

// Create two variables, firstName and lastName
// let firstName = 'Olive';
// let lastName = 'Best Pup';
// // Concatenate the two variables into a third variable called fullName
// let fullName = firstName + ' ' + lastName;
// // Log fullName to the console
// console.log(fullName);


// // Part 2

// let name = "Linda"
// let greeting = "Hi there"

// // Create a function that logs out "Hi there, Linda!" when called
// function greetingOutput() {
//     console.log(greeting + ', ' + name + '!');
// }
// greetingOutput();


// // Part 3

// let myPoints = 3

// // Create two functions, add3Points() and remove1Point(), and have them
// // add/remove points to/from the myPoints variable
// function add3Points() {
//     myPoints += 3
// }
// add3Points();
// add3Points();
// add3Points();

// function remove1Point() {
//     myPoints -= 1
// }
// remove1Point();
// remove1Point();


// // Call the functions to that the line below logs out 10
// console.log(myPoints)


// // Part 4

// // Try to predict what each of the lines will log out
// console.log("2" + 2) // "22"
// console.log(11 + 7) // 18
// console.log(6 + "5") // "65"
// console.log("My points: " + 5 + 9) // "My points: 59"
// console.log(2 + 2) // 4
// console.log("11" + "14") //  "1114"


// // Part 5

// // When the user clicks the purchase button, render out
// // "Something went wrong, please try again" in the paragraph
// // that has the id="error".

// let errorParagraph = document.getElementById("error")
// // console.log(errorParagraph)

// function purchaseBtn() {
//     // console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }



// // Part 6 - Calculator

let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

let total = document.getElementById('sum-el');
// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

function add() {
    let addSum = num1 + num2;
    total.textContent = 'Sum: ' + addSum;
}

function subtract() {
    let subSum = num1 - num2;
    total.textContent = 'Sum: ' + subSum;
}

function divide() {
    let divSum = num1 / num2;
    total.textContent = 'Sum: ' + divSum;
}

function multiply() {
    let mulSum = num1 * num2;
    total.textContent = 'Sum: ' + mulSum;
}