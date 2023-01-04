import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { CountriesData } from '../../countries.model'
import { NavLink } from 'react-router-dom'

type CountriesProps = {
  countries: CountriesData[]
}

const Continents: React.FC <CountriesProps> = (countries) => {
  const [selectedCountry, setSelectedCountry] = useState({})
  const continentsButtons: JSX.Element[] = countries.countries.map(item => {
    return(
      <NavLink to={`/play/${item.code}`}>
        <button onClick={() => assignData(item)} key={item.code}>{item.name}</button>
      </NavLink>
    )
  })
  const assignData = (item: {}) => {
    setSelectedCountry(item)
  }

  return (
    <div className='continent-buttons'>
        {continentsButtons}
    </div>
  )
}

export default Continents