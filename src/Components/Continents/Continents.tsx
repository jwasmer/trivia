import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { CountriesData } from '../../countries.model'
import Categories from "../Categories/Categories.tsx"

type CountriesProps = {
  continents: CountriesData[]
}

const Continents: React.FC<CountriesProps> = (props) => {
  const [selectedContinent, setSelectedContinent] = useState<CountriesProps | {}>({ countries: [] })
  const [selectedCategory, setSelectedCategory] = useState<String>('')
  const continentsButtons: JSX.Element[] = props.continents.map(continent => {
    return (
      <button onClick={() => assignData(continent)} key={continent.code}>{continent.name}</button>
    )
  })
  const assignData = (continent: object) => {
    setSelectedContinent(continent)
    props.setSelectedContinentApp(continent)
  }
  const assignCategory = (event: string) => {
    setSelectedCategory(event.target.name)
    props.setSelectedContinentApp(event.target.name)
  }
  return (
    <div className='continent-buttons'>
      {!selectedContinent.countries.length && <div>{continentsButtons}</div>}
      {selectedContinent.countries.length > 0 && selectedCategory === '' ?
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