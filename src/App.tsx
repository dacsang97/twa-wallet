import { useState } from 'react'
import depsoitLogo from './assets/deposit.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const usdBalanceInt = queryParameters.get("usdBalanceInt") || "0"
  const usdBalanceDecimal = queryParameters.get("usdBalanceDecimal") || "00"

  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Total Balance</h1>
      <div className="container">
        <span className="gray-text big-text">$ </span>
        <span className="big-text">{usdBalanceInt}. </span>
        <span className="small-text">{usdBalanceDecimal}</span>
        <button className="logo-button">
          <img src={depsoitLogo} className="logo" alt="Vite logo" />
        </button>
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
