import { useState } from "react";

function MessageBox({message , color}){
    let [ backgroundColor , setBackgroundColor]= useState(color)
    return(
        <div>
            <p style={{backgroundColor:backgroundColor }}>{message} {color}</p>
        </div>
    )
}
export default MessageBox;