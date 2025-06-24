// Qs1. Write an arrow function named arrayAverage that accepts an array of numbers
// and returns the average of those numbers.

//Ans.
// let arr = [1, 2, 4, 5, 6, 7, 7, 3, 4,];
// let arrayAverage = (arr)=>{
//     let sum =0;
//     for( let val of arr){
//         sum = sum + val ;
//     }
//     return sum/arr.length ;
// }
// console.log(arrayAverage(arr));




// Qs2. Write an arrow function named isEven() that takes a single number as argument
// and returns if it is even or not.


//Ans.
// let isEven = n =>{
//     if(n%2==0){
//         console.log("Even")
//     }else{
//         console.log("Odd")
//     }
// }
// isEven(34);




// Qs3.What is the output of the following code:
// const object = {
//     message: 'Hello, World!',
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage, 1000);


//Ans.
// After a delay of 1 second, undefined is logged to the console.
// While the setTimeout() function uses the object.logMessage as a callback, still, it
// invokes object.logMessage as a regular function, rather than a method.
// And during a regular function invocation this equals the global object, which is a
// window in the case of the browser environment.
// That's why console.log(this.message) inside logMessage method logs
// window.message, which is undefined.


// Qs4.What is the output of the following code:
// let length = 4;
// function callback() {
//     console.log(this.length);
// }
// const object = {
//     length: 5,
//     method(callback) {
//         callback();
//     },
// };
// object.method(callback, 1, 2);


//Ans.
// 'Hello, World!' is logged to the console.
// object.getMessage() is a method invocation, that's why this inside the method equals
// object.
// There's also a variable declaration const message = 'Hello, Earth!' inside the method.
// The variable doesn't influence the value of this.message.