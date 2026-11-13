import { useState } from 'react'
import './styles/global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>MultiStock</h1>
      <p>Gestão de estoque e vendas</p>
    </>
  )
}

export default App
