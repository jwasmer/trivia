import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
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
  console.log('PROPS', props)
  const [selectedContinent, setSelectedContinent] = useState({})
  const contienentKeys = Object.keys(selectedContinent)
  const [selectedCategory, setSelectedCategory] = useState('')
  const continentsButtons: JSX.Element[] = props.continents.map(continent => {
    return (
      <button onClick={() => assignData(continent)} key={continent.code}>{continent.name}</button>
    )
  })
  const assignData = (continent: object) => {
    console.log('CONTIENT', continent)
    setSelectedContinent(continent)
    props.setSelectedContinentApp(continent)
  }
  const assignCategory = (event: React.MouseEvent<HTMLButtonElement> ) => {
    //check that id exists 
    console.log('EVENT.TARGET', event.target)
    if(event.target) {
      setSelectedCategory(event.target.name)
      props.setSelectedCategoryApp(event.target.name)
    }
  }
  return (
    <div className='continent-buttons'>
      {!contienentKeys.length && <div>{continentsButtons}</div>}
      {contienentKeys.length > 0 && selectedCategory === '' ?
        <div>
          <button key="emoji" name="emoji" onClick={(event) => assignCategory(event)}>Flags</button>
          <button key="capitols" name="capitols" onClick={(event) => assignCategory(event)}>Capitols</button>
          <button key="languages" name="languages" onClick={(event) => assignCategory(event)}>Languages</button>
        </div>
        : null}
    </div>
  )
}

export default Continents