// Qs1. Create a number variable num with some value.
// Now, print “good” if the number is divisible by 10 and print “bad” if it is not.
// Ans.
// let num =27;
// if(num%10==0){
//     console.log("Goood");
// }else{
//     console.log("Bad")
// }


// Qs2. Take the user's name & age as input using prompts.
// Then return back the following statement to the user as an alert (by substituting
// their name & age) :
// name is age years old.
// [Use template Literals to print this sentence]
// Ans.
// let name = prompt("Enter your name");
// let age = prompt("Enter your age")
// alert( `${name} is ${age} year old` )



// Qs3. Write a switch statement to print the months in a quarter.
// Months in Quarter 1 : January, February, March
// Months in Quarter 2 : April, May, June
// Months in Quarter 3 : July, August, September
// Months in Quarter 4: October, November, December
// [Use the number as the case value in switch]
//Ans.

// let choice= 2;
// switch(choice){
    
//     case 1:
//     console.log("January, February, March");
//     break;
//     case 2:
//     console.log("April, May, June");
//     break;
//     case 3:
//     console.log("July, August, September");
//     break;
//     case 4:
//     console.log("October, November, December");
//     break;
//     default :
//     console.log("Wrong choice");
// }


// Qs4. A string is a golden string if it starts with the character ‘A’ or ‘a’ and has a total
// length greater than 5.
// For a given string print if it is golden or not.
// Ans.
// let str = 'appleian';
// if(str[0]=='a' || str[0]=='A'){
//     if(str.length >5){
//         console.log("The given string is a golden string")
//     }else{
//         console.log("The given string is not a golden string")

//     }
// }else{
//     console.log("The given string is not a golden string")

// }


// Qs5. Write a program to find the largest of 3 numbers.
// Ans.
// let num1 = 23;
// let num2 = 55 ;
// let num3= 44;

// if(num1>num2){
//     if(num1>num3){
//         console.log(num1);
//     }else{
//         console.log(num3);

//     }
// }else{
//     if(num2>num3){
//         console.log(num2);

//     }else{
//         console.log(num3);

//     }
// }


// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2
// Ans.
let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")
if(num1[num1.length-1]=='2'&& num2[num2.length-1]=='2'){
    console.log("Bonus")
}else{
    console.log("Not a Bonus")

}