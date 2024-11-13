console.log("Hello World")

// Declaring function on how to print a string
function greeting1(){
    console.log("Hello ");

}

// Declaring 2nd function on how to print a string
function greeting2(){
    return "Hello ";
}
// Declaring 3rd functio on how to print a string
function greeting3(name){
    return `Hello ${name}`;
}

function greeting4(name='Sam'){
    return `Hello ${name}`;
}
// Declaring function with multiple perameters
function sum(num1=0, num2=0){
    return num1 + num2
}

// Calling function
greeting1();
// Calling function to equal to variable str
let str = greeting2();
// printing on console what the variable str is equal to
console.log(str);
// Calling function that has return value
console.log(greeting2());
// Calling function
console.log(greeting3('Abdul'));
// Calling function greeting4
console.log(greeting4());
console.log(greeting4('Tom'));
// printing sum function and testing with 
console.log(sum(3,5));
console.log(sum('3','5'));
console.log(sum('Hi','Abdul'));
console.log(sum(3));
console.log(sum(3,5,6));
console.log(sum());

let m = sum();
console.log(m)
console.log(typeof(m));
// Assigning the variable f to the function sum
const f = sum;
console.log(typeof(f));
console.log(f(7,9));
// Changing f to a number 
//f = 9;

// Function Expression
let f2 = function(){
    return "Good Afternoon"
};
console.log(f2())
// Changing f2 from function to number
f2 = 20;
console.log(f2)

// Arrow function
let f3 = ()=>"Good Afternoon";

console.log(f3());

// how to convert a expression function to an arrow function
const sum3 = function(num1=0, num2=0){
    return num1+num2;
}

console.log(sum3(14,7));

const sum4 = (num1=0, num2=0)=>num1+num2;

console.log(sum4(10,30));


