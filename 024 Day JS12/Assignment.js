// let h1 = document.createElement('h1');
// let body = document.querySelector('body');
// body.appendChild(h1);

// h1.innerText= "hello! I am heading";


// function changeColor(color , delay) {
//     return new Promise((res, rej )=>{
//         setTimeout(()=>{
//             h1.style.color = color;
//             res();
//         },delay);
//     })
// }


// async function coloranimation(){
//     await changeColor("red", 1000)
//     await changeColor("orange", 1000)
//     await changeColor("blue", 1000)
//     await changeColor("green", 1000)
//     await changeColor("yellow", 1000)
// }

// coloranimation();



let url = "https://catfact.ninja/fact"


//Using Promise Channing

// fetch(url).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log("Data 1 : " ,data.fact)
//     return fetch(url);
// }).then((res)=>{
//     return res.json();
// }).then((data)=>{
//     console.log("Data 2 : " ,data.fact)
// }).catch((err)=>{
//     console.log(err);
// })


//Using Async Await

async function facts() {
    try {
        let js1 = await fetch(url);
        let data1 = await js1.json();
        console.log("Data 1 : ", data1.fact)

        let js2 = await fetch(url);
        let data2 = await js2.json();
        console.log("Data 2 : ", data2.fact)

    }catch(err){
        console.log(err.message);
        
    }

    console.log("All facts are done.")
    
}
facts();