export const exchangeHelper = (
  USDValue: number,
  SatoshisPerBitCloutExchangeRate: number,
): number => {
  return ((USDValue / 100) * SatoshisPerBitCloutExchangeRate) / 1000000;
};
