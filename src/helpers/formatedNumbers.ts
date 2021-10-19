import currency from 'currency.js';

export function formatedNumbers(
  data: string | number | null,
  pattern: string = `! #`
) {
  if (!data) {
    return '-';
  }
  return currency(data, {
    pattern: pattern,
    precision: 0,
  }).format();
}
