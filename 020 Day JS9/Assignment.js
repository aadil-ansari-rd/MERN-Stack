//PRACTICE


// let body = document.querySelector('body');
// let para = document.createElement('p');
// para.innerText = "Hey I'm red!"
// para.style.color = "red";
// body.appendChild(para);

// let h3 = document.createElement('h3');
// h3.innerText = "Hey I'm blue!"
// h3.style.color = "blue";
// body.appendChild(h3);

// let div = document.createElement('div')
// body.appendChild(div);
// div.classList.add('divStyle');

// let h1 = document.createElement('h1')
// h1.innerText ="I'm in a div"
// let p2 = document.createElement('p')
// p2.innerText ="Mee too"

// div.appendChild(h1)
// div.appendChild(p2)



//ASSIGNMENT
let body = document.querySelector('body')

// Qs1.Create a new input and button element on the page using JavaScript only.Set the
// text of button to “Click me”;

//Ans.

let input = document.createElement('input');
let button = document.createElement('button');
button.innerText= "Click Me";
body.appendChild(input);
body.appendChild(button);




// Qs2.Add following attributes to the element:
// - Change placeholder value of input to “username”
// - Change the id of button to “btn”

//Ans.

input.setAttribute('placeholder',"username");
button.setAttribute('id', 'btn');



// Qs3.Access the btn using the querySelector and button id.Change the button
// background color to blue and text color to white.

//Ans.

let btn = document.querySelector('#btn');
btn.style.color = "white";
btn.style.backgroundColor = "blue";




//Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined.
// Change its color to purple.

//Ans.

let h1 = document.createElement('h1');
h1.innerText='DOM Practice';
h1.classList.add('h1style')
body.insertAdjacentElement("beforeend",h1);



//Qs5.Create a p tag on the page and set its text to “Apna College Delta Practice”,
// where Delta is bold.

//Ans.

let para = document.createElement('p');
para.innerText = "Apna College Delta Practice";
para.style.fontWeight = "bold"
body.append(para);

