import { useState } from "react";
import { genTicket, sum } from "./helper";
import Ticket from "./Ticket";
function Lottery({n=3, winningSum=15}) {

    let [ticket, setTicket] = useState(genTicket(3));

    let isWinning = (sum(ticket) === winningSum);

    let buyTicket = () => {
        setTicket(genTicket(n))
    }



    return (
        <div>
            <h1>Lottery GAME !</h1>
            <Ticket ticket={ticket} />
            <button onClick={buyTicket}>Buy new ticket</button>
            <h3>{isWinning && "Congrtaulation , You have won !"}</h3>
        </div>
    );



}

export default Lottery;