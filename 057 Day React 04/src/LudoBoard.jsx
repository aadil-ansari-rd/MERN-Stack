import { use, useState } from "react";

function LudoBoard(){
    let [moves, setMoves]= useState({blue: 0, yellow : 0, green : 0, red:0});
    let [arr, setArray]= useState(["No moves"]);

    function updateBlue(){
        setMoves((prevMoves)=>{
            return {...prevMoves , blue : prevMoves.blue+1};
        })

        setArray((prevArr)=>{
            return [...prevArr , " | Blue Move"]
        })
    }
    function updateYellow(){
        setMoves((prevMoves)=>{
            return {...prevMoves , yellow : prevMoves.yellow+1};
        })
        setArray((prevArr)=>{
            return [...prevArr , " | Yellow Move"]
        })
    }
    function updateGreen(){
        setMoves((prevMoves)=>{
            return {...prevMoves , green : prevMoves.green+1};
        })
        setArray((prevArr)=>{
            return [...prevArr , " | Green Move"]
        })
    }
    function updateRed(){
        setMoves((prevMoves)=>{
            return {...prevMoves , red : prevMoves.red+1};
        })
        setArray((prevArr)=>{
            return [...prevArr , " | Red Move"]
        })
    }



    return(
        <div>
            <p>Game Begins !</p>
            <p>{arr}</p>
            <div className="board">
                <p>Blue moves = {moves.blue} </p>
                <button style={{backgroundColor:"blue" }}  onClick={updateBlue}>+1</button>
                <p>Yellow moves ={moves.yellow} </p>
                <button style={{backgroundColor:"yellow" }}  onClick={updateYellow}>+1</button>
                <p>Green moves = {moves.green}</p>
                <button style={{backgroundColor: "green"}}  onClick={updateGreen}>+1</button>
                <p>Red moves = {moves.red}</p>
                <button style={{backgroundColor:"red" }}  onClick={updateRed}>+1</button>
            </div>
        </div>
    );
}
export default LudoBoard;



//Object and State

// import { use, useState } from "react";

// function LudoBoard(){
//     let [moves, setMoves]= useState({blue: 0, yellow : 0, green : 0, red:0});

//     function updateBlue(){
//         setMoves((prevMoves)=>{
//             return {...prevMoves , blue : prevMoves.blue+1};
//         })
//     }
//     function updateYellow(){
//         setMoves((prevMoves)=>{
//             return {...prevMoves , yellow : prevMoves.yellow+1};
//         })
//     }
//     function updateGreen(){
//         setMoves((prevMoves)=>{
//             return {...prevMoves , green : prevMoves.green+1};
//         })
//     }
//     function updateRed(){
//         setMoves((prevMoves)=>{
//             return {...prevMoves , red : prevMoves.red+1};
//         })
//     }



//     return(
//         <div>
//             <p>Game Begins !</p>
//             <div className="board">
//                 <p>Blue moves = {moves.blue} </p>
//                 <button style={{backgroundColor:"blue" }}  onClick={updateBlue}>+1</button>
//                 <p>Yellow moves ={moves.yellow} </p>
//                 <button style={{backgroundColor:"yellow" }}  onClick={updateYellow}>+1</button>
//                 <p>Green moves = {moves.green}</p>
//                 <button style={{backgroundColor: "green"}}  onClick={updateGreen}>+1</button>
//                 <p>Red moves = {moves.red}</p>
//                 <button style={{backgroundColor:"red" }}  onClick={updateRed}>+1</button>
//             </div>
//         </div>
//     );
// }
// export default LudoBoard;