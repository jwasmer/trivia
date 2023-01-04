export interface CountriesData {
  code: string,
  name: string,
  countries: {
    capital: string,
    code: string,
    currency: string,
    emoji: string,
    languages: {
      name: string,
      native: string
    }[],
    name: string,
    states: {name: string}[],
  }[]
}