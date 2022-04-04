export const convertCurrencyAmount = (from, to, fromValue, rates) => {
  let amount = 0;
  let ghs = parseFloat(rates.ghs);
  let erf = (rates.exchange_rate_fee / 100) * rates.ghs;
  let fromAmount = parseFloat(fromValue);
  if (from === "USD" && to === "GHS") {
    amount = (ghs - erf) * fromAmount;
  }
  if (from === "GHS" && to === "USD") {
    amount = fromAmount / (ghs + erf);
  }
  if (from === to) {
    amount = fromAmount;
  }
  return amount.toFixed(2);
};
// let erf = (rates.exchange_rate_fee / 100) * rates.ghs;
export const mapRates = (rates, fromCurrency, toCurrency) => {
  let rate = 0;
  let erf = (rates.exchange_rate_fee / 100) * rates.ghs;
  if (fromCurrency === "USD" && toCurrency === "GHS") {
    rate = rates.ghs - erf;
  }
  if (fromCurrency === "GHS" && toCurrency === "USD") {
    rate = rates.ghs + erf;
  }
  if (fromCurrency === toCurrency) {
    rate = 1;
  }
  return rate.toFixed(2);
};

export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}