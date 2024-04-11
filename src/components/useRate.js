async function useRate(input, output) {
    [input, output] = [input.toLowerCase(), output.toLowerCase()];
    let p = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${input}.json`);
    let data = await p.json();
    return data[input][output];
}
export default useRate;