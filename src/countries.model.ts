export interface CountriesData {
  code: string,
  countries: {
    code: string,
    name: string,
    emoji: string,
    capital: string,
    currency: string,
    languages: {
      name: string,
      native: string
    }[],
    states: {name: string}[],
  }
}