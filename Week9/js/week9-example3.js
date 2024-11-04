console.log("Hello");

// Created function showOutput that will show the output of the input and make the color red
function showOutput(){
    let name = document.querySelector("#name").value;
    document.querySelector("#output").textContent = "Hello " + name;
    document.querySelector("#output").style.color = "red";


}

// Creating event to show output when button is clicked
document.querySelector("#btn").addEventListener('click', showOutput);

