import { useState } from 'react'
import './App.css'
import MainBox from "./components/MainBox.jsx"
function App() {
  return (
    <>
    <div className="playground">
      <MainBox desg="from" currencyname="usd" />
      <MainBox desg="to" currencyname="inr" />
    </div>
    </>
  )
}

export default App
