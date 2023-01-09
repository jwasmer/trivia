import React from 'react'
import { KeepScore, Guesses, Score } from '../App/App'

const Scoreboard = ({ keepScore, guesses }: {keepScore: KeepScore, guesses: Guesses}) => {
  const score: Score = keepScore(guesses)
  return (
    <>
      <div>
        <p>Africa: {score.Africa}</p>
        <p>Asia: {score.Asia}</p>
        <p>Europe: {score.Europe}</p>
        <p>North America: {score['North America']}</p>
        <p>Oceania: {score.Oceania}</p>
        <p>South America: {score['South America']}</p>
      </div>
    </>
  )
}

export default Scoreboard