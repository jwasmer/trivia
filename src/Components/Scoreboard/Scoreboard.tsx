import React from 'react'
import { KeepScore, Guesses, Score } from '../App/App'

export default function Scoreboard({ keepScore, guesses }: {keepScore: KeepScore, guesses: Guesses}) {
  const score: Score = keepScore(guesses)
  return (
    <>
      <div>
        <p data-cy="north-america">North America: {score["North America"]}</p>
        <p data-cy="south-america">South America: {score["South America"]}</p>
        <p data-cy="asia">Asia: {score.Asia}</p>
        <p data-cy="oceania">Oceania: {score.Oceania}</p>
        <p data-cy="europe">Europe: {score.Europe}</p>
        <p data-cy="africa">Africa: {score.Africa}</p>
      </div>
    </>
  )
}