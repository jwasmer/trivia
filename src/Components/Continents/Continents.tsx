import React, { useState, useEffect, ButtonHTMLAttributes, useRef } from 'react'
import { SyntheticEvent } from 'react'
import { CountriesData } from '../../countries.model'

interface CountriesProps {
  continents: CountriesData[]
  continent?: CountriesData[]
  assignSelections: React.FC 
  // filterSelections: React.FC
  // setSelectedContinentApp: ({ }) => {}
  // setSelectedCategoryApp: ({ }) => {}
}

type CategoryButton = {
  assignCategory: (event: React.MouseEvent<HTMLButtonElement>) => void
}

type EventTarget = {
  name: string | null
}

const Continents: React.FC<CountriesProps> = (props): JSX.Element => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [selectedContinent, setSelectedContinent] = useState({})
  const contienentKeys = Object.keys(selectedContinent)
  const [selectedCategory, setSelectedCategory] = useState('')
  
  const continentsButtons: JSX.Element[] = props.continents.map(continent => {
    return (
      <button onClick={() => assignData(continent)} key={continent.code}>{continent.name}</button>
    )
  })
  const assignData = (continent: object) => {
    props.assignSelections(continent)
    setSelectedContinent(continent)
  }
  const assignCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    console.log("assign category name",event.target.name)
    props.assignSelections(event.target.name)
    setSelectedCategory(event.target.name)
    props.filterSelections(event.target.name)
  }
  return (
    <div className='continent-buttons'>
      {!contienentKeys.length && <div>{continentsButtons}</div>}
      {contienentKeys.length > 0 && selectedCategory === '' ?
        <div>
          <button ref={buttonRef} key="emojis" name="emoji" onClick={(event) => assignCategory(event)}>Flags</button>
          <button ref={buttonRef} key="capitals" name="capital" onClick={(event) => assignCategory(event)}>Capitals</button>
          <button ref={buttonRef} key="languages" name="languages" onClick={(event) => assignCategory(event)}>Languages</button>
        </div>
        : null}
    </div>
  )
}
 
export default Continents
