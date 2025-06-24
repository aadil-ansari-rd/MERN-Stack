const max =prompt("Enter the maximum number of the range")
const random = Math.floor(Math.random()*max)+1;

let guess = prompt("Guess the number");
while(true){
    if(guess=="quit"){
        console.log("User quit");
        break;
    }
    if(guess==random){
        alert("Your guess was wright ! Random No : "+ random);
        break;
    }else if(guess<random){
        guess= prompt("Your guess was too small , please try again");
    }
    else{
        guess= prompt("Your guess was too large , please try again");

    }

}