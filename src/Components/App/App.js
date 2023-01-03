import '../App/App.css'
import React, { useState, useEffect } from 'react'
import getData from "../../apicalls"

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
    </main>
  )
}

export default App
