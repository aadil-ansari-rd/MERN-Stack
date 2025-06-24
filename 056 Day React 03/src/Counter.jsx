import { useState } from "react";

function Counter() {
    let [count, setCount] = useState(0)

    // let inCount = ()=>{
    //     setCount(count+1); 
    //     setCount(count+1);
    //     //It is written two times but it will increse only once ,i.e., each time when inCount is called
    //     // value will increase by 1. If you want to increase as you expected then use callback in setCount as follows :
    // }

    let inCount = () => {
        setCount((currCount)=>{
            return currCount + 1 ;
        })
        setCount((currCount)=>{
            return currCount + 1 ;
        })
        //NOw on each time of inCount call , value will increase by 2.

        setCount((currCount)=>{
            return currCount + 1 ;
        }) //currCount within the callback has the current value of the count 
           // when the callback is executed it return an incremented value that is used in the setCount() and
           // value of count is updated 





    }
    return (
        <>
            <h3>Count : {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </>
    );
}
export default Counter;