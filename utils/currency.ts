const CURRENCY_FORMATTER = new Intl.NumberFormat('sv-se', { currency: 'SEK', style: 'currency' })

export function currencyFormatter(value: number) {
  return CURRENCY_FORMATTER.format(value)
}
