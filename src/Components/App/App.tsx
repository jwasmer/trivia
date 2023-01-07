import './App.css'
import React, { useState, useEffect } from 'react'
import getData from "../../apicalls"
import { Route, Routes, NavLink } from 'react-router-dom'
import Continents from '../Continents/Continents'
import Trivia from '../Trivia/Trivia'
import Scoreboard from '../Scoreboard/Scoreboard'
import { CountriesData } from '../../countries.model'

// ---------- TypeScript Interfaces ----------

export interface Guesses {
  [country: string]: GuessScoreCount
  Americas: GuessScoreCount
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
  Americas?: number | string
  Asia?: number | string
  Oceania?: number | string
  Europe?: number | string
  Africa?: number | string
}

export interface KeepScore {
  (guesses: Guesses): Score
}

// ---------- Component & Hook Declarations ----------

const App: React.FC = () => {

  const [data, setData] = useState<CountriesData[]>([])
  const [selectedContinent, setSelectedContinentApp] = useState({})
  const [selectedCategory, setSelectedCategoryApp] = useState<String>('')
  const [guesses, setGuesses] = useState<Guesses>({ 
    Americas: {
      correct: 0, 
      total: 0
    }, 
    Asia: {
      correct: 0, 
      total: 0
    }, 
    Oceania: {
      correct: 0, 
      total: 0
    }, 
    Europe: {
      correct: 0, 
      total: 0
    }, 
    Africa: {
      correct: 0, 
      total: 0
    } 
  })

  // -------- Game Data Fetch ----------

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
  }, [])

  // -------- Game Logic ----------

  const keepScore: KeepScore = (guesses: Guesses): Score => {

    const continents: string[] = Object.keys(guesses)

    const score: Score = continents.reduce((acc: Score, val: string | keyof Score) => {
      if (guesses[val].total === 0) {
        acc[val] = "Not attempted!"
      }
      else {
        acc[val] = `${guesses[val].correct / (guesses[val].total)}%`
      }

      return acc
    }, {})

    return score
  }

  const assignSelections = (newSelection: object | string)  => {
    if (newSelection === 'emoji' || newSelection === 'capitols' || newSelection === 'languages') {
      setSelectedCategoryApp(newSelection)
      console.log("CATEGORY", newSelection)
    } else {
      setSelectedContinentApp(newSelection)
      console.log("CONTINENT TYPE", newSelection)
    }
  }

// ---------- 

  return (
    <main className="app-container">
       <NavLink to='/' className='home-link'>
        <h1 className="title" data-cy="title">Trivia Game</h1>
      </NavLink>
      <Routes>
        <Route
          path="/"
          element={<div className="homepage-content">
            <img className="earth-gif" src={'https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif'} alt="rotating earth gif" data-cy="earth-gif"/>
            <div className="home-buttons">
            <NavLink to='/play' className='select-link'>
              <button className="select-game" data-cy="select-game-btn">Select Game</button>
            </NavLink>
            <NavLink to='/scoreboard' className='scoreboard-link'>
              <button className="view-scoreboard" data-cy="view-scoreboard-btn">View Scoreboard</button>
            </NavLink>
            </div>
          </div>}
        />
        {data.length && <Route
          path="/play"
           element={<Continents continents={data} assignSelections={assignSelections} />}
        />}
        <Route
          path="/h"
          element={<Trivia countries={data}/>}
        />
        <Route
          path="/scoreboard"
          element={<Scoreboard keepScore={keepScore} guesses={guesses} />} 
        />
      </Routes>
    </main>
  )
}

export default App