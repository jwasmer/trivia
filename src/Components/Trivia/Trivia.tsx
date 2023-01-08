import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { CountriesData } from '../../countries.model'
import { NavLink } from 'react-router-dom'
import './Trivia.css'

//- MOSTLY DONE: need a randomizer to randomly select a country's flag... with the filter limiting it to the proper continent.
//- DONE: need a randomizer to randomly select 3 other country names
//---- DONE: firstly, ensuring that 1 of the four is the correct answer
//---- DONE: secondly, ensuring that the other 3 do not contain the correct answer
//---- WIP: thirdly, ensuring that a country whose flag is in the current quiz does NOT show up on the pool of    ------"other answers"... to make ------ sure repeats don't happen
//---- NOT NECESSARY: fourthly, ensuring that the 3 WRONG countries in one question do not re-appear too often, if at all, ------in future questions
//---- fifthly, ensuring that the correct answer is not always 'ANSWER C'

//Let's keep it bite-sized and start with a 10-question quiz!



// WIP: On initial page load, the first question should pop up. The user should get one try. Correct/incorrect should be stored globally to keep a scoreboard. After an option is clicked, a "next" button should appear.


type CountriesProps = {
 countries: CountriesData[]
}
 
const Trivia: React.FC <CountriesProps> = (countries) => {
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
  },
  {
    country: 'South Africa',
    emoji: '🇿🇦',
  },
  {
    country: 'Ghana',
    emoji: '🇬🇭',
  },
  {
    country: 'Gabon',
    emoji: '🇬🇦',
  },
  {
    country: 'Ethiopia',
    emoji: '🇪🇹',
  },
  {
    country: 'Angola',
    emoji: '🇦🇴',
  },
  {
    country: 'Burkina Faso',
    emoji: '🇧🇫',
  },
  {
    country: 'Burundi',
    emoji: '🇧🇮',
  },
  {
    country: 'Botswana',
    emoji: '🇧🇼',
  },
  {
    country: 'DRC',
    emoji: '🇨🇩',
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

const displayNextButton = () => {
  setNextButtonStatus("next-button")
  setCount(count + 1)
  console.log(count);
}

const [count, setCount] = useState(0);
const [shuffledArray, setShuffledArray] = useState(shuffle(tempArray))
const [nextButtonStatus, setNextButtonStatus] = useState("next-button hidden")
const [randomOrder, setRandomOrder] = useState(shuffle([0, 1, 2, 3]))
const [currentFlag, setCurrentFlag] = useState(shuffledArray[0].emoji)
const [currentChoices, setCurrentChoices] = useState([
  <button className="mc-button" id="mc-a" onClick={displayNextButton}>{shuffledArray[0].country}</button>,
  <button className="mc-button" id="mc-b" onClick={displayNextButton}>{shuffledArray[1].country}</button>,
  <button className="mc-button" id="mc-c" onClick={displayNextButton}>{shuffledArray[2].country}</button>,
  <button className="mc-button" id="mc-d" onClick={displayNextButton}>{shuffledArray[3].country}</button>
])

const resetQuestion = () => {
  setNextButtonStatus("next-button hidden")
  shuffledArray.shift()
  setShuffledArray(shuffle(shuffledArray))
  setRandomOrder(shuffle([0, 1, 2, 3]))
  setCurrentFlag(shuffledArray[0].emoji)
  setCurrentChoices([
    <button className="mc-button" id="mc-a" onClick={displayNextButton}>{shuffledArray[0].country}</button>,
    <button className="mc-button" id="mc-b" onClick={displayNextButton}>{shuffledArray[1].country}</button>,
    <button className="mc-button" id="mc-c" onClick={displayNextButton}>{shuffledArray[2].country}</button>,
    <button className="mc-button" id="mc-d" onClick={displayNextButton}>{shuffledArray[3].country}</button>
  ])
}

 
 return (
   <div className="questions-content">
    <div className="question">
      <div className="card">
      <h2 className="which-question">Which country uses this flag?</h2>
      <h1 className="emoji">{currentFlag}</h1>  
    </div>
     </div>
     <div className="mc-buttons">
      {currentChoices[randomOrder[0]]}
      {currentChoices[randomOrder[1]]}
      {currentChoices[randomOrder[2]]}
      {currentChoices[randomOrder[3]]}
      </div>
      <div className="next-button-container">
        <button className={nextButtonStatus} onClick={resetQuestion}>Next!</button>
      </div>
   </div>
 )
}
 
export default Trivia