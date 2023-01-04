import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { Route, Routes, NavLink } from 'react-router-dom'
import { CountriesData } from '../../countries.model'
import Categories from "../Categories/Categories.tsx"

type CountriesProps = {
  countries: CountriesData[]
}

const Continents: React.FC<CountriesProps> = (countries) => {
  const [selectedContinent, setSelectedContinent] = useState({})
  const continentsButtons: JSX.Element[] = countries.countries.map(item => {
    return (
      <NavLink to={`/play/${item.code}`}>
        <button onClick={() => selectedContinentButtons(item)} key={item.code}>{item.name}</button>
      </NavLink>
    )
  })
  const selectedContinentButtons = (item) =>
  console.log("ITEM", item)
    Object.keys(item).map((key) => {
      return (
        <button>{key}</button>
      )
    })

  return (
    <div className='continent-buttons'>
      {continentsButtons}
      {selectedContinentButtons}
      {/* {selectedContinent && <Categories selectedCountry={selectedContinent} />} */}
    </div>
  )
}

export default Continents