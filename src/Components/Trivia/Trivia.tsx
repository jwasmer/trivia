import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { CountriesData } from '../../countries.model'
import { NavLink } from 'react-router-dom'
import './Trivia.css'

//-need a randomizer to randomly select a country's flag... with the filter limiting it to the proper continent.
//-need a randomizer to randomly select 3 other country names
//----firstly, ensuring that 1 of the four is the correct answer
//----secondly, ensuring that the other 3 do not contain the correct answer
//----thirdly, ensuring that a country whose flag is in the current quiz does NOT show up on the pool of    ------"other answers"... to make sure repeats don't happen
//----fourthly, ensuring that the 3 WRONG countries in one question do not re-appear too often, if at all, ------in future questions
//----fifthly, ensuring that the correct answer is not always 'ANSWER C'
//Let's keep it bite-sized and start with a 10-question quiz!
//First, randomly pick 10 countries. These will be the correct-emojis to show up



//On initial page load, the first question should pop up. The user should get one try. Correct/incorrect should be stored globally to keep a scoreboard. After an option is clicked, a "next" button should appear.
type CountriesProps = {
 countries: CountriesData[]
}
 
const Trivia: React.FC <CountriesProps> = (countries) => {
 const [selectedCountry, setSelectedCountry] = useState({})
 const tempArray = [
  {
    country: 'Algeria',
    emoji: '🇩🇿',
  },
  {
    country: 'Tunisia',
    emoji: '🇹🇳',
  },
  {
    country: 'Libya',
    emoji: '🇱🇾',
  },
  {
    country: 'Morocco',
    emoji: '🇲🇦',
  },
  {
    country: 'Egypt',
    emoji: '🇪🇬',
  }
 ]

const shuffle = (array: any) => {
  var length = array.length, current, remaining;

  while (length) {

    remaining = Math.floor(Math.random() * length--);

    current = array[length];
    array[length] = array[remaining];
    array[remaining] = current;
  }

  return array;
}

const randomizedArray = shuffle(tempArray)

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
   <div className="continent-selection-content">
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