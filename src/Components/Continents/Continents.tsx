import React, { useState, useEffect, ButtonHTMLAttributes, useRef } from 'react'
import { SyntheticEvent } from 'react'
import { CountriesData } from '../../countries.model'

interface CountriesProps {
  continents: CountriesData[]
  continent?: CountriesData[]
  assignSelections?: selections | any
  filterSelections: (categoryData: string) => void
}

interface CategoryButton {
  assignCategory: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface selections {
  assignSelections: (newSelection: object | string) => void
}

type EventTarget = {
  name: string | null
}

const Continents: React.FC<CountriesProps> = (props): JSX.Element => {
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
    props.assignSelections(event.currentTarget.name)
    setSelectedCategory(event.currentTarget.name)
    props.filterSelections(event.currentTarget.name)
  }
  return (
    <div className='continent-buttons'>
      {!contienentKeys.length && <div>{continentsButtons}</div>}
      {contienentKeys.length > 0 && selectedCategory === '' ?
        <div>
          <button key="emojis" name="emoji" onClick={(event) => assignCategory(event)}>Flags</button>
          <button key="capitals" name="capital" onClick={(event) => assignCategory(event)}>Capitals</button>
          <button key="languages" name="languages" onClick={(event) => assignCategory(event)}>Languages</button>
        </div>
        : null}
    </div>
  )
}
 
export default Continents
