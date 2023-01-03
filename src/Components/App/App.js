import '../App/App.css'
import React, { useState, useEffect } from 'react'
import getData from "../../apicalls"
import { Route, Routes } from 'react-router-dom'

const App = () => {
  const [data, setData] = useState([])
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
