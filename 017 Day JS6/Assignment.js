// Qs1. Write a JavaScript function that returns array elements larger than a number.
//Ans.
// let arr = [1, 2,3, 4, 56, 7 ,8, 9, 45, 56]
// let constant = 3;
// function arrayElement(arr, constant){
//     for ( let value of arr){
//         if(value > constant){
//             console.log(value);
//         }
//     }
// }
// arrayElement(arr,constant);


// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh”
// ans = “abcdefgh”
//Ans.

// let str = "abcdabcdefgggh";
// let ans = "";

// function uniqueChar(str) {
//     for (let i = 0; i < str.length; i++) {
//         let currentChar = str[i];
//         if (ans.indexOf(currentChar) == -1) {
//             ans = ans + currentChar
//         }
//     }
//     console.log(ans);
// }
// uniqueChar(str);






// Qs3. Write a JavaScript function that accepts a list of country names as input and
// returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"]
// output : "United States of America"
//Ans.

// let country = ["Australia", "Germany", "United States of America"]
// let maxlength = 0;
// let currentCharlen=0;
// let longestCntry = ""

// function longestCountry(arr){
//     for(let value of arr){
//         currentCharlen  = value.length;
//         if(currentCharlen>maxlength){
//             maxlength= currentCharlen;
//             longestCntry = value;
//         }
//     }
//     console.log(longestCntry);
// }

// longestCountry(country);




// Qs4. Write a JavaScript function to count the number of vowels in a String argument.
//Ans.

// let str = "Education";
// function vowelCount(s){
//     let vowelCnt = 0;
//     for(let ch of s){
//         if(ch=="a"||ch=="e"||ch=="i"||ch=="o"||ch=="u"||ch=="A"||ch=="E"||ch=="I"||ch=="O"||ch=="U"){
//             vowelCnt++;
//         }
//     }
//     console.log(vowelCnt);
// }

// vowelCount(str);





// Qs5. Write a JavaScript function to generate a random number within a range (start,
// end).
//Ans.

// let start = 20;
// let end = 40;
// function generateRandomNo(start , end){
//     let random = Math.floor(Math.random()*20)+21;
//     console.log(random);
// }
// generateRandomNo(start, end);
