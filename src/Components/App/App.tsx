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

const App: React.FC = () => {
  const [data, setData] = useState<CountriesData[]>([])
  const [correctGuesses, setCorrectGuesses] = useState<Guesses>({ Americas: 0, Asia: 8, Oceania: 0, Europe: 0, Africa: 0 })
  const [incorrectGuesses, setIncorrectGuesses] = useState<Guesses>({ Americas: 0, Asia: 4, Oceania: 0, Europe: 0, Africa: 0 })
  
  const initApp = async () => {
    try {
      const response = await getData()
      console.log('DATA', data)
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

  const keepScore = (continent: keyof Guesses): string  => {
    console.log('DATA', data)
    const total = correctGuesses[continent] + incorrectGuesses[continent]
    const score = (correctGuesses[continent]/total * 100).toFixed() + '%'
    return score
  }

  return (
    <main className="app-container">
       <NavLink to='/' className='home-link'>
        <h1 className="title">Trivia Game</h1>
       </NavLink>
      <Routes>
        <Route
          path="/"
          element={<div className="homepage-content">
            <img className="earth-gif" src={'https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif'} alt="rotating earth gif" />
            <div className="home-buttons">
            <NavLink to='/play' className='select-link'>
              <button className="select-game">Select Game</button>
            </NavLink>
            <NavLink to='/scoreboard' className='scoreboard-link'>
              <button className="view-scoreboard">View Scoreboard</button>
            </NavLink>
            </div>
          </div>}
          />
          <Route
          path="/play"
          element={<Continents countries={data}/>}
        />
      </Routes>
    </main>
  )
}

export default App