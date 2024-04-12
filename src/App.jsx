import { useEffect, useState} from 'react';
import useRate from "./components/useRate";
import './App.css'
import MainBox from "./components/MainBox.jsx"
function App() {
  const [inputCurrencyISO, setInputCurrencyISO] = useState("INR");
  const [inputCurrencySymbol, setInputCurrencySymbol] = useState("₹");
  const [inputCurrencyName, setInputCurrencyName] = useState("Indian Rupee");
  const [inputCurrencyValue, setInputCurrencyValue] = useState("1");
  const [outputCurrencyISO, setOutputCurrencyISO] = useState("USD");
  const [outputCurrencySymbol, setOutputCurrencySymbol] = useState("$");
  const [outputCurrencyName, setOutputCurrencyName] = useState("US Dollar");
  const [OutputCurrencyValue, setOutputCurrencyValue] = useState("");
  useEffect(() => {
    useRate(inputCurrencyISO, outputCurrencyISO).then((value) => {
      setOutputCurrencyValue((Number(inputCurrencyValue) * value).toFixed(2));
    })
  }, [inputCurrencyISO, outputCurrencyISO, inputCurrencyValue])
  return (
    <div className="playground">
      <img src="src/components/bg.jpg"></img>
      <div className="container color-white">
        <MainBox desg="from" currencyISO={inputCurrencyISO} setCurrencyISO={setInputCurrencyISO} currenyName={inputCurrencyName} setCurrencyName={setInputCurrencyName} currencySymbol={inputCurrencySymbol} setCurrencySymbol={setInputCurrencySymbol} currencyValue={inputCurrencyValue} setCurrencyValue={setInputCurrencyValue} readOnly={false}/>
        <button id="swap"
        onClick={() => {
          let temp = inputCurrencyISO;
          setInputCurrencyISO(outputCurrencyISO);
          setOutputCurrencyISO(temp);
          temp = inputCurrencyName;
          setInputCurrencyName(outputCurrencyName);
          setOutputCurrencyName(temp);
          temp = inputCurrencySymbol;
          setInputCurrencySymbol(outputCurrencySymbol);
          setOutputCurrencySymbol(temp);
        }}
        ><img src="src/components/swap.svg"></img></button>
        <MainBox desg="to" currencyISO={outputCurrencyISO} setCurrencyISO={setOutputCurrencyISO} currenyName={outputCurrencyName} setCurrencyName={setOutputCurrencyName} currencySymbol={outputCurrencySymbol} setCurrencySymbol={setOutputCurrencySymbol} currencyValue={OutputCurrencyValue}/>
      </div>
    </div>
  )
}

export default App
