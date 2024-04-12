import currencyList from "./newList.json"
function MainBox({ desg, currencyISO, setCurrencyISO, currenyName, setCurrencyName, currencySymbol, setCurrencySymbol, currencyValue, setCurrencyValue = null, readOnly = true }) {
    return (
        <div className="mainBox">
            <div className="firstPart">
                <p>{desg}</p>
                <div className="currencyDetails">
                    <h1>{currencyISO}</h1>
                    <h2>{currenyName} ({currencySymbol})</h2>
                </div>
            </div>
            <div className="secondPart">
                {/* <label htmlFor="currencySelect">Select a Currency:</label> */}
                <select id="currencySelect" value={currencyISO} onChange={(event) => {
                    setCurrencyISO(event.target.value);
                    setCurrencyName(currencyList[event.target.value]["name"]);
                    setCurrencySymbol(currencyList[event.target.value]["symbol"]);
                }}>
                    {
                        Object.keys(currencyList).map((item, index) => (
                            <option key={index} value={item}>{`${item} (${currencyList[item]["name"]})`}</option>
                        ))
                    }
                </select>
                <input
                    type="text"
                    readOnly={readOnly}
                    value={currencyValue}
                    onChange={(event) => {
                        let value = Number(event.target.value);
                        if (!isNaN(value)) {
                            setCurrencyValue(event.target.value);
                        }
                    }}
                >
                </input>
            </div>
        </div>
    )
}
export default MainBox;