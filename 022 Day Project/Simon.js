let gameSeq = [];
let userSeq = [];
let btns = ['red', 'yellow', 'green', 'purple']
let started = false;
let level = 0;
let highestScore = 0;

let h2 = document.querySelector('h2');
let h3 = document.createElement('h3');
h3.innerText = ""
document.querySelector('body').appendChild(h3);

document.addEventListener('keypress', function () {
    if (started == false) {
        console.log("Game has started")
        started = true;
        levelup();

    }
})

function levelup() {
    userSeq = []
    level++;
    h2.innerText = `Level ${level}`;

    //random button choose
    let randomIdx = Math.floor(Math.random() * 4)
    let randomClr = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomClr}`)
    gameSeq.push(randomClr);
    gameFlash(randomBtn);
}

function gameFlash(btn) {
    btn.classList.add('flash');
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250)
}
function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 100)
}

function checkAns(idx) {
    //let idx = level -1 ;
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000)
        }
    } else {
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(() => {
            document.querySelector('body').style.backgroundColor = "white"

        }, 150)
        if(level>highestScore){
            highestScore = level;
            h3.innerText = `Highest Score : ${highestScore}`
        }
        
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to start.`
        reset();
    }
}

function btnPress() {
    console.log('button is pressed')
    let btn = this;
    userFlash(btn)

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');

for (btn of allBtns) {
    btn.addEventListener('click', btnPress)
}

function reset() {
    started = false;
    gameSeq = []
    userSeq = []
    level = 0;
}


