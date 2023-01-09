import React, { useState } from 'react'
import './Trivia.css'
 
interface TriviaProps {
  gameData: any
  guesses: any
  updateScore: (categoryData: any) => void
}

const Trivia: React.FC<TriviaProps> = (props) => {
console.log("SELECTED GAME DATA", props.gameData)
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
    setCurrentFlag("Click Trivia Game to return home")
    setStyling("which-question")
    props.guesses[props.gameData.continent].total += 10
    props.guesses[props.gameData.continent].correct += score
    props.updateScore(props.guesses)
  } else {
    setNextButtonStatus("next-button hidden")
    shuffledArray.shift()
    setShuffledArray(shuffle(shuffledArray))
    setRandomOrder(shuffle([0, 1, 2, 3]))
    setCurrentFlag(shuffledArray[0].emoji)
    setCurrentChoices([
      <button className="mc-button" id="mc-a" onClick={clickA}>{shuffledArray[0].name}</button>,
      <button className="mc-button" id="mc-b" onClick={clickB}>{shuffledArray[1].name}</button>,
      <button className="mc-button" id="mc-c" onClick={clickC}>{shuffledArray[2].name}</button>,
      <button className="mc-button" id="mc-d" onClick={clickD}>{shuffledArray[3].name}</button>
    ])
  }
}

const clickA = () => {
  setScore(score + 1)
  displayNextButton()
  setCurrentChoices([
    <button className="mc-button correct" id="mc-a" onClick={clickA}>{shuffledArray[0].name}</button>,
    <button className="mc-button" id="mc-b" onClick={clickB}>{shuffledArray[1].name}</button>,
    <button className="mc-button" id="mc-c" onClick={clickC}>{shuffledArray[2].name}</button>,
    <button className="mc-button" id="mc-d" onClick={clickD}>{shuffledArray[3].name}</button>
  ])
}

const clickB = () => {
  displayNextButton()
  setCurrentChoices([
    <button className="mc-button correct" id="mc-a" onClick={clickA}>{shuffledArray[0].name}</button>,
    <button className="mc-button incorrect" id="mc-b" onClick={clickB}>{shuffledArray[1].name}</button>,
    <button className="mc-button" id="mc-c" onClick={clickC}>{shuffledArray[2].name}</button>,
    <button className="mc-button" id="mc-d" onClick={clickD}>{shuffledArray[3].name}</button>
  ])

}

const clickC = () => {
  displayNextButton()
  setCurrentChoices([
    <button className="mc-button correct" id="mc-a" onClick={clickA}>{shuffledArray[0].name}</button>,
    <button className="mc-button" id="mc-b" onClick={clickB}>{shuffledArray[1].name}</button>,
    <button className="mc-button incorrect" id="mc-c" onClick={clickC}>{shuffledArray[2].name}</button>,
    <button className="mc-button" id="mc-d" onClick={clickD}>{shuffledArray[3].name}</button>
  ])
}

const clickD = () => {
  displayNextButton()
  setCurrentChoices([
    <button className="mc-button correct" id="mc-a" onClick={clickA}>{shuffledArray[0].name}</button>,
    <button className="mc-button" id="mc-b" onClick={clickB}>{shuffledArray[1].name}</button>,
    <button className="mc-button" id="mc-c" onClick={clickC}>{shuffledArray[2].name}</button>,
    <button className="mc-button incorrect" id="mc-d" onClick={clickD}>{shuffledArray[3].name}</button>
  ])
}

const [count, setCount] = useState(0);
const [score, setScore] = useState(0);
const [shuffledArray, setShuffledArray] = useState(shuffle(importedArray))
const [nextButtonStatus, setNextButtonStatus] = useState("next-button hidden")
const [randomOrder, setRandomOrder] = useState(shuffle([0, 1, 2, 3]))
const [currentFlag, setCurrentFlag] = useState(shuffledArray[0].emoji)
const [words, setWords] = useState("Which country does this pertain to?")
const [styling, setStyling] = useState("emoji")
const [currentChoices, setCurrentChoices] = useState([
  <button className="mc-button" id="mc-a" onClick={clickA}>{shuffledArray[0].name}</button>,
  <button className="mc-button" id="mc-b" onClick={clickB}>{shuffledArray[1].name}</button>,
  <button className="mc-button" id="mc-c" onClick={clickC}>{shuffledArray[2].name}</button>,
  <button className="mc-button" id="mc-d" onClick={clickD}>{shuffledArray[3].name}</button>
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