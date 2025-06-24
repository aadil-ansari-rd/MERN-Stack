import { useState } from "react";

function Lottery() {

    let [isWin, setIsWin] = useState(false);
    let [lotteryNum , setLotteryNum] = useState(0);
    let[showTicket, setShowTicket]= useState(false);
    let [sum , setsum ]=useState(0)

    function isSum(num){
        
        let sum =  0;

        while(num!=0){
            sum = sum + num%10;
            num = Math.floor(num/10);
        }
        setsum(sum)
        if(sum == 15){
            return true;
        }else{
            return false;
        }
    }


    function getTicket(){
        let num = Math.floor(Math.random() * 999) + 1;

        setLotteryNum(num);
        setShowTicket(true);
        if(isSum(num)){
            setIsWin(true);
        }else{
            setIsWin(false)
        }
        

    }



    return (
        <div>
            {!isWin ? (<div>
                <h1>Lottery</h1>
                {showTicket && <p>Lottery Tickket = {lotteryNum} , Sum = {sum}</p>}              
                <button onClick={getTicket}>Get new ticket</button>
            </div>) : (<div>
                <h1>Lottery , Congratulaiton , You Won !</h1>
                {showTicket && <p>Lottery Tickket = {lotteryNum} , Sum = {sum}</p>}
                <button onClick={getTicket}>Get new ticket</button>
            </div>)}
        </div>
    );
}

export default Lottery;