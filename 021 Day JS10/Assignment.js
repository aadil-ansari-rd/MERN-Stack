//PRACTICE

let h1 = document.querySelector('h1')
let div = document.querySelector('div')
let btn = document.querySelector('button')

btn.addEventListener('click', () => {
    let randomColor = generateRandomColor();
    h1.innerText = randomColor;
    h1.style.color= randomColor;
    div.style.backgroundColor=randomColor;
})
function generateRandomColor(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    return color;
}


//ASSIGNMENT


// Qs1. Try out the following events in Event Listener on your own :
// - mouseout
// - keypress
// - Scroll
// - load
// [Use MDN for help]

//Ans.

let div1 = document.querySelector('.q1');
div1.addEventListener('mouseout',(event)=>{
    div1.style.backgroundColor = "wheat"
})

let inp1 = document.querySelector('.i1');
inp1.addEventListener('keypress',(event)=>{
    inp1.style.backgroundColor = "orange"
    inp1.style.color = "white"
})

let p1 = document.querySelector('.p1');
p1.addEventListener('scroll',(event)=>{
    p1.style.backgroundColor = "blue"
    p1.style.color = "white"
})

let b1 = document.querySelector('.b1');
b1.addEventListener('click', (event)=>{
    window.location.reload();
})
window.addEventListener('load',(even)=>{
    alert('page is loaded successfully')
})



// Qs2. Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.

//Ans.

let b2 = document.querySelector('.b2')
b2.addEventListener('click', (event)=>{
    b2.style.backgroundColor= 'green';
    b2.style.color= 'white';
})


// Qs3. Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.

// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]


let h3 = document.querySelector('.h3');
let i3 = document.querySelector('.i3');
let lenFlag = 0;
i3.addEventListener('input', function(event){
    let input = this.value;
    let filteredInput = "";

    for(let i=0; i<input.length ; i++){
        let char = input[i];
        if((char<='z'&& char >= 'A')||(char<='Z'&& char >= 'A')|| char == " "){
            filteredInput = filteredInput + char;
        }
    }
    h3.innerText = filteredInput;
    this.value = filteredInput;
    
    
})
