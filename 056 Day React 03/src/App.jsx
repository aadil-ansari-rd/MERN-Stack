import { useState } from "react"
import Form from "./Form";
import Counter from "./Counter";
import Like from "./Like";
import Counter2 from "./Counter2";
function App() {


  return (

    <div>
      <Form />
      <h1>States in React</h1>
      <hr />
      <h1>Like Button </h1>
      <Like />
      <hr />
      <h1>Counter</h1>
      <Counter/>
      <hr />
      <h1>Counter2</h1>
      <Counter2/>
    </div>
  )
}

export default App




