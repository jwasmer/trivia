import React, { useState, useEffect, ButtonHTMLAttributes, useRef } from 'react'
import { SyntheticEvent } from 'react'
import { CountriesData } from '../../countries.model'

interface CountriesProps {
  continents: CountriesData[]
  continent?: CountriesData[]
  setSelectedContinentApp: ({}) => {} 
  setSelectedCategoryApp: ({}) => {} 
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
    setSelectedContinent(continent)
    props.setSelectedContinentApp(continent)
  }
  const assignCategory = (event: React.MouseEvent<HTMLButtonElement> ) => {
    event.preventDefault()
    const category = buttonRef.current!.name
    setSelectedCategory(category)
    props.setSelectedCategoryApp(category)
  }
  return (
    <div className='continent-buttons'>
      {!contienentKeys.length && <div>{continentsButtons}</div>}
      {contienentKeys.length > 0 && selectedCategory === '' ?
        <div>
          <button ref={buttonRef} key="emoji" name="emoji" onClick={(event) => assignCategory(event)}>Flags</button>
          <button ref={buttonRef} key="capitols" name="capitols" onClick={(event) => assignCategory(event)}>Capitols</button>
          <button ref={buttonRef} key="languages" name="languages" onClick={(event) => assignCategory(event)}>Languages</button>
        </div>
        : null}
    </div>
  )
}

export default Continents