import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { CountriesData } from '../../countries.model'
import { NavLink } from 'react-router-dom'
import { KeepScore, Guesses, Score } from '../App/App'
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
 
interface TriviaProps {
  gameData: any
  guesses: any
  updateScore: (categoryData: any) => void
}

const Trivia: React.FC<TriviaProps> = (props) => {

const importedArray = props.gameData.gameData.map((country: any) => country)
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
  if(count < 10 ) {
    setNextButtonStatus("next-button")
  }
  setCount(count + 1)
  console.log(count);
  console.log('importedArray: ', importedArray)
  console.log('shuffledArray: ', shuffledArray)
}

const resetQuestion = () => {
  if(count > 9) {
    setWords(`You got ${score}/10 correct!`)
    setCurrentFlag("Return home to play another round.")
    setStyling("which-question")
  } else {
    setNextButtonStatus("next-button hidden")
    shuffledArray.shift()
    setShuffledArray(shuffle(shuffledArray))
    setRandomOrder(shuffle([0, 1, 2, 3]))
    setCurrentFlag(shuffledArray[0].emoji)
    setCurrentChoices([
      <button className="mc-button" id="mc-a" onClick={displayNextButton}>{shuffledArray[0].name}</button>,
      <button className="mc-button" id="mc-b" onClick={displayNextButton}>{shuffledArray[1].name}</button>,
      <button className="mc-button" id="mc-c" onClick={displayNextButton}>{shuffledArray[2].name}</button>,
      <button className="mc-button" id="mc-d" onClick={displayNextButton}>{shuffledArray[3].name}</button>
    ])
  }
}

const [count, setCount] = useState(0);
const [score, setScore] = useState(0);
const [shuffledArray, setShuffledArray] = useState(shuffle(importedArray))
const [nextButtonStatus, setNextButtonStatus] = useState("next-button hidden")
const [randomOrder, setRandomOrder] = useState(shuffle([0, 1, 2, 3]))
const [currentFlag, setCurrentFlag] = useState(shuffledArray[0].emoji)
const [words, setWords] = useState("Which country uses this flag?")
const [styling, setStyling] = useState("emoji")
const [currentChoices, setCurrentChoices] = useState([
  <button className="mc-button" id="mc-a" onClick={displayNextButton}>{shuffledArray[0].name}</button>,
  <button className="mc-button" id="mc-b" onClick={displayNextButton}>{shuffledArray[1].name}</button>,
  <button className="mc-button" id="mc-c" onClick={displayNextButton}>{shuffledArray[2].name}</button>,
  <button className="mc-button" id="mc-d" onClick={displayNextButton}>{shuffledArray[3].name}</button>
])

 return (
  <div className="trivia-container">
    <div className="questions-content">
    <div className="question">
      <div className="card">
      <h2 className="which-question">{words}</h2>
      <h1 className={styling}>{currentFlag}</h1>  
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
  </div>
 )
}
 
export default Trivia