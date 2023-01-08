import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { CountriesData } from '../../countries.model'
import { NavLink } from 'react-router-dom'
import './Trivia.css'

type CountriesProps = {
  countries: CountriesData[]
}

const Trivia: React.FC<CountriesProps> = (props) => {
  



  const currentQuestion = (
    <div className="card">
      <h2 className="which-question">Which country uses this flag?</h2>
      <h1 className="emoji">{randomizedArray[0].emoji}</h1>
    </div>
  )

  const currentChoices = [
    <button className="mc-button" id="mc-a">{randomizedArray[0].country}</button>,
    <button className="mc-button" id="mc-b">{randomizedArray[1].country}</button>,
    <button className="mc-button" id="mc-c">{randomizedArray[2].country}</button>,
    <button className="mc-button" id="mc-d">{randomizedArray[3].country}</button>
  ]

  const randomOrder = shuffle([0, 1, 2, 3])

  //makebuttonappear()
  //clickbutton(), which fires reset() and newquestion()

  return (
    <div className="questions-content">
      <div className="question">{currentQuestion}</div>
      <div className='mc-buttons'>
        {currentChoices[randomOrder[0]]}
        {currentChoices[randomOrder[1]]}
        {currentChoices[randomOrder[2]]}
        {currentChoices[randomOrder[3]]}
      </div>
    </div>
  )
}

export default Trivia