// This page should capture the score held in App.tsx state and display it. The page should include the following:
//     Average correct % overall
//     Average correct % by continent

import React, { useState } from 'react'
import { KeepScore, Guesses, Score } from '../App/App'

export default function Scoreboard({ keepScore, guesses }: {keepScore: KeepScore, guesses: Guesses}) {
  const score: Score = keepScore(guesses)
  return (
    <>
      <div>
        <p>Americas</p>, Asia</p>, Oceania</p>, Europe</p>, Africa</p>
      </div>
    </>
  )
}