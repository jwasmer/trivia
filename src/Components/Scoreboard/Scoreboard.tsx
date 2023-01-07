import React from 'react'
import { KeepScore, Guesses, Score } from '../App/App'

export default function Scoreboard({ keepScore, guesses }: {keepScore: KeepScore, guesses: Guesses}) {
  const score: Score = keepScore(guesses)
  return (
    <>
      <div>
        <p>Americas: {score.Americas}</p> 
        <p>Asia: {score.Asia}</p>
        <p>Oceania: {score.Oceania}</p>
        <p>Europe: {score.Europe}</p>
        <p>Africa: {score.Africa}</p>
      </div>
    </>
  )
}