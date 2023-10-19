import depsoitLogo from './assets/deposit.svg'

function App() {
  const queryParameters = new URLSearchParams(window.location.search)
  const usdBalanceInt = queryParameters.get('usdBalanceInt') || '0'
  const usdBalanceDecimal = queryParameters.get('usdBalanceDecimal') || '00'

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl text-gray-800">Total Balance</h1>
      <div className="flex items-center">
        <span className="text-3xl text-gray-500">$ </span>
        <div className="flex items-end">
          <div className="text-3xl">{usdBalanceInt}. </div>
          <div className="text-xl">{usdBalanceDecimal}</div>
        </div>
        <button className="logo-button px-5 py-3">
          <img src={depsoitLogo} className="logo" alt="Vite logo" />
        </button>
      </div>
    </div>
  )
}

export default App
