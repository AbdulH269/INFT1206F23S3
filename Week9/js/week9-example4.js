console.log("Hello World")

//Showing output of 2 numbers and outputing it
function showOutput(){
    let number1 = parseFloat(document.querySelector("#num1").value);
    let number2 = parseFloat(document.querySelector("#num2").value);
    let sum = number1 + number2;
    document.querySelector('#output').textContent = "The sum of " + number1 + " and " + number2 + " is " + sum
}

// Creating a click event for the button and output the sum of the numbers
document.querySelector('#btn').addEventListener('click', showOutput)