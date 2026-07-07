// import { useState } from 'react'

import './App.css'
import { formatDate } from "@myapp/utils";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1>Welcome to the BlogPage</h1>
    <h3> {formatDate(new Date())} </h3>
      
    </>
  )
}

export default App


