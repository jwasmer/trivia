import React, { useState, useEffect, ButtonHTMLAttributes, useRef } from 'react'
import { SyntheticEvent } from 'react'
import { CountriesData } from '../../countries.model'
import './Continents.css'

interface CountriesProps {
  continents: CountriesData[]
  continent?: CountriesData[]
  assignSelections?: selections | any
}

interface CategoryButton {
  assignCategory: (event: React.MouseEvent<HTMLButtonElement>) => void
}

interface selections {
  assignSelections: (newSelection: object | string) => void
}

const Continents: React.FC<CountriesProps> = (props): JSX.Element => {
  const [selectedContinent, setSelectedContinent] = useState({})
  const contienentKeys = Object.keys(selectedContinent)
  const [selectedCategory, setSelectedCategory] = useState('')
  const continentsButtons: JSX.Element[] = props.continents.map(continent => {
    return (
      <button className='continent-button' onClick={() => assignData(continent)} key={continent.code}>{continent.name}</button>
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
  }
  return (
    <div>
       <img className="earth-gif" src='https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif' alt="rotating earth gif" data-cy="earth-gif"/>
      <div className='continent-buttons'>
        {!contienentKeys.length && <div>{continentsButtons}</div>}
        {contienentKeys.length > 0 && selectedCategory === '' ?
          <div className='category-buttons'>
            <button className='continent-button' key="emoji" name="emoji" onClick={(event) => assignCategory(event)}>Flags</button>
            <button className='continent-button' key="capitols" name="capitols" onClick={(event) => assignCategory(event)}>Capitols</button>
            <button className='continent-button' key="languages" name="languages" onClick={(event) => assignCategory(event)}>Languages</button>
          </div>
          : null}
      </div>
    </div>
  )
}
 
export default Continents
