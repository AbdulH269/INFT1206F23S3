console.log("Hello");

//Created a function that asks for our name and says hello to us
function showGreetingMessage(){
    let name = window.prompt("What is your name?");
    window.alert("Hello " + name);

}

// Created an event that when we click on the button it activates the function
document.querySelector('#btn').addEventListener('click', showGreetingMessage);

// Created a function to change color of header 1
function changeColor(){
    document.querySelector('#banner').style.color = 'red';
}

// Created an event that changes header 1 to red color when the mouse hover over
document.querySelector("#banner").addEventListener("mouseover", changeColor);