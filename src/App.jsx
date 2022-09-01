import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>This is my app.</h1>

      <ul style={{ listStyle: "none", }}>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/hi">Hi</Link></li>
      </ul>
    </div>
  )
}

export default App
