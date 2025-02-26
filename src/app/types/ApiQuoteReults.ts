type Quote = {
  author: string
  quote: string
  id: string
}
type ApiQuoteResults = {
  quotes: Quote[]
}

export { Quote, ApiQuoteResults}

