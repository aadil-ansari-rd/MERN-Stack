// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
// Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
// Result should be arr = [1, 3, 4, 5, 6, 3]
// Ans .

// let arr = [1, 2, 3, 4, 5, 6, 2, 3];
// let num = 2;
// for(let i=0;i<arr.length ;i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// for(i of arr){
//     console.log(i);
// }
// console.log(arr)


// Qs2. Write a JS program to find the no of digits in a number.
// Example : if number = 287152, count = 6
// Ans .

// let number = 287152;
// let count = 0;
// while(number!=0){
//     count++;
//     number = Math.floor(number / 10);
// }
// console.log(count);


// Qs3. Write a JS program to find the sum of digits in a number.
// Example : if number = 287152, sum = 25
// Ans .

// let number = 287152;
// let sum =0 ;
// while(number!=0){
//     let r = number%10;
//     sum = sum +r;
//     number = Math.floor(number / 10);
// }
// console.log("Sum of digits are : ",sum );




// Qs4. Print the factorial of a number n.
// [Factorial of a number n is the product of all positive integers less than or equal to a
// given positive integer and denoted by that integer. ]
// Example :
// 7! (factorial of 7) = 1x2x3x4x5x6x7 = 5040
// 5! (factorial of 5) = 1x2x3x4x5 = 120
// 3! (factorial of 3) = 1x2x3 = 6
// 0! Is always 1
// Ans .

// let num=7;
// let fact = 1;
// while(num!=1){
//     fact = fact*num;
//     num = num-1;
// }
// console.log(fact);


// Qs5. Find the largest number in an array with only positive numbers.
// Ans .

let arr = [34,34,56,764,567,9897,2,546,56]
let largest=arr[0];
for(num of arr){
    if(num>largest){
        largest=num;
    }
}
console.log(largest);
