import { useState } from 'react'
import './App.css'
import MainBox from "./components/MainBox.jsx"
function App() {
  const [currencyValueOne, setCurrencyValueOne] = useState(1);
  const [currencyValueTwo, setCurrencyValueTwo] = useState(82.22);
  return (
    <>
    <div className="playground">
      <MainBox desg="from" currency="USD" currencyValueOne={currencyValueOne} setCurrencyValueOne={setCurrencyValueOne} currencyValueTwo={currencyValueTwo} setCurrencyValueTwo={setCurrencyValueTwo} />
      <MainBox desg="to" currency="IND" currencyValueOne={currencyValueTwo} setCurrencyValueOne={setCurrencyValueTwo} currencyValueTwo={currencyValueTwo} setCurrencyValueTwo={setCurrencyValueTwo} />
    </div>
    </>
  )
}

export default App
