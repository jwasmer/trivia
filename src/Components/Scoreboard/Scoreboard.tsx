// This page should capture the score held in App.tsx state and display it. The page should include the following:
//     Average correct % overall
//     Average correct % by continent

import React, { useState } from 'react'

function Scoreboard({ keepScore, guesses }) {
  const score: KeepScore = keepScore(guesses)
  return (
    <>
      <div>
        <p>{ }</p>
      </div>
    </>
  )
}