import { useState } from "react";
import getRate  from "./getRate";
function MainBox({desg, currencyname, readOnly = false, resultValue = null, setResultValue = null}) {
    const [otherCurrencyValue, setOtherCurrencyValue] = useState(1);
    const [currency, setCurrency] = useState(currencyname);
    const [currencyList, setCurrencyList] = useState([currency]);
    async function getCurrencyList() {
        let p = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
        let data = await p.json();
        var currencyMap = data[currency];
        setCurrencyList(Object.keys(currencyMap));
    }
    return (
        <div className="mainBox">
            <p>{desg}</p>
            <h1>{currency.toUpperCase()}</h1>
            <label htmlFor="currencySelect">Select a Currency:</label>
            <select id="currencySelect" onClick={getCurrencyList} onChange={(event) => {
                setCurrency(event.target.value);
                otherCurrencyValue(currencyMap[event.target.value])
                }} value={currency}>
                {
                currencyList.map((value, index) => (
                        <option key={index} value={value}>{value}</option>
                    ))
                }
            </select>
            <input
            type="text"
            readOnly={readOnly}
            onChange={(event) => {
                let value = Number(event.target.value);
                if (!isNaN(value)) {

                }
            }}
            ></input>
        </div>
    )
}
export default MainBox;