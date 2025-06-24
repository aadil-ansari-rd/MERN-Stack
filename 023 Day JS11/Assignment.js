let h1 = document.createElement('h1');
let body = document.querySelector('body')
body.appendChild(h1)
h1.innerText = "Hello hi "

// function changeColor(color, time, nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         if(nextColorChange)nextColorChange();
//     }, time)
// }

// changeColor("red", 1000, ()=>{
//     changeColor("orange",1000, ()=>{
//         changeColor("blue",1000)
//     })
// })

function changeColor2(color, time) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            h1.style.color = color;
            res('color changed')

        }, time)

    })
}

changeColor2("red", 1000).then(() => {
    changeColor2("orange", 1000)
}).then(() => {


    changeColor2("green", 1000)
})