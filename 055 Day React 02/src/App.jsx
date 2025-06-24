import { useState } from "react"
import MessageBox from "./MessageBox"
import Cards from "./Cards";
function App() {
  let [message, setMessage] = useState("");
  let [color, setColor] = useState("");
  let [submit, setSubmit] = useState(false);


  return (
    <>
      <h1>write your color</h1>
      <input type="text" placeholder="Write your message" onChange={
        (e) => {
          setMessage(e.target.value);
          setSubmit(false);
        }
      } />
      <input type="text" placeholder="Write your message color" onChange={(e) => {
        setColor(e.target.value);
        setSubmit(false);
      }} />
      <input type="button" value={"Click me"} onClick={()=>setSubmit(true)} />
      {submit && <MessageBox message={message} color={color}></MessageBox>}



      <Cards/>
    </>
  )
}

export default App




