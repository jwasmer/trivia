import React, { useState, useEffect, ButtonHTMLAttributes, useRef } from 'react'
import { SyntheticEvent } from 'react'
import { CountriesData } from '../../countries.model'
import './Continents.css'
import { Route, Routes, NavLink, Link } from 'react-router-dom'
import { CountriesProps} from '../../interfaces'

const Continents: React.FC<CountriesProps> = (props): JSX.Element => {
  const [selectedContinent, setSelectedContinent] = useState({})
  const contienentKeys = Object.keys(selectedContinent)
  const [selectedCategory, setSelectedCategory] = useState('')

  const continentsButtons: JSX.Element[] | any = props.continents.map(continent => {
    if (continent.name !== "Antarctica") {
      return (
        <button className="option-button continent-button continent-name option-name" onClick={() => assignData(continent)} key={continent.code}>{continent.name}</button>
      )
    }
  })
  const assignData = (continent: object) => {
    props.assignSelections(continent)
    setSelectedContinent(continent)
  }
  const assignCategory = (event: React.MouseEvent<HTMLButtonElement>) => {
    props.assignSelections(event.currentTarget.name)
    setSelectedCategory(event.currentTarget.name)
    props.filterSelections(event.currentTarget.name)
  }
  return (
    <div className='continent-buttons'>
      <img className="earth-gif" src={'https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif'} alt="rotating earth gif" data-cy="earth-gif" />
      {!contienentKeys.length && <div>{continentsButtons}</div>}
      {contienentKeys.length > 0 && selectedCategory === '' ?
        <div>
          <NavLink to="/play">
            <button className='continent-name option-name option-button continent-button' key="emoji" name="emoji" onClick={(event) => assignCategory(event)}>Flags</button>
            <button className='continent-name option-name option-button continent-button' name="capital" onClick={(event) => assignCategory(event)}>Capitals</button>
            <button className='continent-name option-name option-button continent-button' name="languages" onClick={(event) => assignCategory(event)}>Languages</button>
          </NavLink>
        </div>
        : null}
    </div>
  )
}

export default Continents