// ---------- App.tsx Interfaces ----------
export interface Guesses {
  [country: string]: GuessScoreCount
  Antartica: GuessScoreCount
  "North America": GuessScoreCount
  "South America": GuessScoreCount
  Asia: GuessScoreCount
  Oceania: GuessScoreCount
  Europe: GuessScoreCount
  Africa: GuessScoreCount
}
export interface GuessScoreCount {
  correct: number,
  total: number
}
export interface Score {
  [country: string]: number | string | undefined
  NorthAmerica?: number | string
  SouthAmerica?: number | string
  Antartica?: number | string
  Asia?: number | string
  Oceania?: number | string
  Europe?: number | string
  Africa?: number | string
}

export interface KeepScore {
  (guesses: Guesses): Score
}

// ---------- Continents.tsx Interfaces ----------
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

export interface CountriesProps {
  continents: CountriesData[]
  continent?: CountriesData[]
  assignSelections?: selections | any
  filterSelections: (categoryData: string) => void
}

export interface selections {
  assignSelections: (newSelection: object | string) => void
}

// ---------- Trivia.tsx Interfaces ----------
export interface TriviaProps {
  gameData: { 
    category: string
    continent: string
    gameData: {
      usedInQuestion: boolean
      name: string
      emoji: string
    }[]
  } | any
  guesses: Guesses
  updateScore: (updatedScore: Guesses) => void
}
