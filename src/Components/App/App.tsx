import './App.css'
import React, { useState, useEffect } from 'react'
import getData from "../../apicalls"
import { Route, Routes, NavLink } from 'react-router-dom'
import Continents from '../Continents/Continents'
import { CountriesData } from '../../countries.model'

interface Guesses {
  Americas: number,
  Asia: number,
  Oceania: number,
  Europe: number,
  Africa: number
}

type ContinentsData = {
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

const App: React.FC = () => {

  const [data, setData] = useState<CountriesData[]>([])
  const [selectedContinent, setSelectedContinentApp] = useState<ContinentsData | {}>({})
  const [selectedCategory, setSelectedCategoryApp] = useState<String>('')
  const [gameData, setGameData] = useState([])
  const [correctGuesses, setCorrectGuesses] = useState<Guesses>({ Americas: 0, Asia: 0, Oceania: 0, Europe: 0, Africa: 0 })
  const [incorrectGuesses, setIncorrectGuesses] = useState<Guesses>({ Americas: 0, Asia: 0, Oceania: 0, Europe: 0, Africa: 0 })

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

  const keepScore = (continent: keyof Guesses): string => {
    const total = correctGuesses[continent] + incorrectGuesses[continent]
    const score = (correctGuesses[continent] / total * 100).toFixed() + '%'
    return score
  }

  const assignSelections = (newSelection: object | string) => {
    if (newSelection === 'emoji' || newSelection === 'capital' || newSelection === 'languages') {
      setSelectedCategoryApp(newSelection)
      console.log("CATEGORY", newSelection)
    } else {
      setSelectedContinentApp(newSelection)
      console.log("CONTINENT TYPE", newSelection)
    }
  }

  // type Filter = {
  //   filterSelections: () => void
  //   selectedGameData: {gameData: Array, continent: string, }
  // }
  // type Filter = {
  //   filterSelections: () => void

  // }

  type GameData = {
    gameData: {}
    // gamedata: [{"Canada": "Montreal"}]
    continent: string
    category: string
    selectedGameData: () => void
    name: string
  }

  const filterSelections = (categoryData: string) => {
    console.log("selected continent at filter", selectedContinent)
    const selectedGameData = selectedContinent.countries.reduce<GameData>((acc: GameData, curr: string) => {
      acc.gameData.push({ [curr.name]: curr[categoryData] })
      return acc
    }, { gameData: [], continent: selectedContinent.name, category: categoryData })
    console.log("selected game data", selectedGameData)
    setGameData(selectedGameData)
  }

  return (
    <main className="app-container">
      <NavLink to='/' className='home-link'>
        <h1 className="title" data-cy="title">Trivia Game</h1>
      </NavLink>
      <Routes>
        <Route
          path="/"
          element={<div className="homepage-content">
            <img className="earth-gif"
              src={'https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif'}
              alt="rotating earth gif"
              data-cy="earth-gif" />
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
          element={<Continents continents={data}
            assignSelections={assignSelections}
            filterSelections={filterSelections} />}
        />}
      </Routes>
    </main>
  )
}

export default App
