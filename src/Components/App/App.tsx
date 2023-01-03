import '../App/App.css'
import React, { useState, useEffect } from 'react'
import getData from "../../apicalls"
import { Route, Routes } from 'react-router-dom'

interface countryData {
  data: string[]
}

interface Guesses {
  Americas: number,
  Asia: number,
  Oceania: number,
  Europe: number,
  Africa: number
}

const App: React.FC = () => {
  const [data, setData] = useState<countryData>()
  const [correctGuesses, setCorrectGuesses] = useState<Guesses>({ Americas: 0, Asia: 8, Oceania: 0, Europe: 0, Africa: 0 })
  const [incorrectGuesses, setIncorrectGuesses] = useState<Guesses>({ Americas: 0, Asia: 4, Oceania: 0, Europe: 0, Africa: 0 })
  const initApp = async () => {
    try {
      const response = await getData()
      setData(response.data.continents)
    }
    catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    initApp()
    console.log("data", data)
    keepScore('Asia')
  }, [])

  const keepScore = (continent: string) => {
    const total = correctGuesses[continent] + incorrectGuesses[continent]
    const score = (correctGuesses[continent] / total * 100).toFixed() + '%'
    console.log('score', score)
  }

  return (
    <main className="app-container">
      <h1>Trivia Game</h1>
      <Routes>
        <Route
          exact path="/"
          element={<h2>Start view</h2>}
        />
        <Route
          exact path="/play"
          element={<h2>Play view</h2>}
        />
      </Routes>
    </main>
  )
}

export default App
