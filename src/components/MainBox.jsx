import getRate  from "./getRate";
function MainBox({desg, currencyOne, currencyTwo, currencyValueOne, setCurrencyValueOne, currencyValueTwo, setCurrencyValueTwo}) {
    return (
        <div className="mainBox">
            <div className="upperContent">
                <p>{desg}</p>
                <h1>{currency}</h1>
                <div className="circle"></div>
            </div>
            <input type="text" 
            id="value"
            value={currencyValueOne}
            onChange={async (event) => {
                let value = Number(event.target.value);
                if (!isNaN(value)) {
                    setCurrencyValueOne(event.target.value)
                    console.log(await getRate(currencyOne.toLowerCase(), currencyTwo.toLowerCase()));
                }
            }}
            />
            <div className="line"></div>
        </div>
    )
}
export default MainBox;