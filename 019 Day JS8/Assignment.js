// Qs1. Square and sum the array elements using the arrow function and then find the
// average of the array.

//Ans.

// let arr = [12, 2, 3,4,5, 6, 7,5,]
// let sumAv = (arr)=>{
//     let sum = arr.reduce((sum , el)=>sum + el );
//     console.log('Sum : ' , sum );
//     console.log("Average  : " , sum/arr.length);
// }
// sumAv(arr);


// Qs2. Create a new array using the map function whose each element is equal to the
// original element plus 5.

//Ans.

// let arr = [12, 2, 3,4,5, 6, 7,5,];
// let arr2 = arr.map((el)=> el*5);
// console.log(arr)
// console.log(arr2)




// Qs3. Create a new array whose elements are in uppercase of words present in the
// original array.

//Ans.

// let name1 = ['aadil', 'tanya','ayush', 'shivani'];
// let name2 = name1.map((el)=>el.toUpperCase());
// console.log(name2);


// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a
// variable number of arguments. The function should return a new array with the original
// array values and all of the additional arguments doubled.

//Ans.

// let arr = [12, 2, 3,4,5, 6, 7,5,];
// function  doubleAndReturnArgs(arr , ...nums){
//     for (value of nums){
//         arr.push(value*2);
//     }
//     return arr;
// }
// console.log(doubleAndReturnArgs(arr , 2,3,4,5,6,7))

// Qs5. Write a function called mergeObjects that accepts two objects and returns a new
// object which contains all the keys and values of the first object and second object.

//Ans.
// let obj1 = {
//     name: 'sahil',
//     class: 12
// }
// let obj2 = {
//     city: 'delhi',
//     cluntry: 'India'
// }

// const mergeObjects = (obj1, obj2) => {
//     const obj3 = {
//         ...obj1,
//         ...obj2
//     }
//     console.log(obj3)

// }
// mergeObjects(obj1,obj2);
