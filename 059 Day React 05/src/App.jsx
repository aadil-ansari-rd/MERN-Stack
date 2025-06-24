import { useState } from "react"
import Lottery from "./Lottery"

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <Lottery n={5} winningSum={20}/>
    </div>
  )
}

export default App




