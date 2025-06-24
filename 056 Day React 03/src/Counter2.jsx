import { useState } from "react";

function init(){
    console.log("init was executed")
    return Math.random()
}

function Counter2(){
    //let [count , setCount]=useState(init())// In this the init() will executer every time when component is re-rendereed
    
    let [count , setCount]= useState(init); //this is good practice . it will be executed only once
    
    console.log("Component was renderes")

    function inCount () {
        setCount(count+1);

    }
    return (
        <>
            <h3>Count : {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </>
    );

}
export default Counter2;
