async function getRate(currency, to) {
    let data = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`);
    let jsonData = await data.json();
    return jsonData[currency][to];
}
export default getRate;