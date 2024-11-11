console.log("hello World")

// Scope of the variables
//1- Global scope
//a- Any variable declared using var keyword or let keyword outside the function 
//Any variable delcared without var or let or const(It is not good practice)
//2 - Function scope (local scope)
//a- Any variable declared using var keyword inside the function 
//3-Block scope
//a- Any variable declared using let keyword inside the block  



// Global variables
var g =10;
console.log("(Outside the function) g = "+g);

// Function variable
function todo(){
    console.log("(Outside the function) g = "+g);
    var a = 5;
    console.log("(Outside the function) g = "+a);

    //Block variable
    {
        let c = 100;
        console.log("(inside the block)c="+c);
        
        var b = 22;
        console.log("(inside the block)c="+b);
    }
    console.log("(Outside the block)b="+b);
    
    let e = 500;

    d=100;
}
// gives error
//console.log("(Outside the function) g = "+a);
todo();
console.log("(outside the function)d="+d);
// printing outside the function into the html file
document.getElementById('id1').innerHTML="outside the function)d="+d;



