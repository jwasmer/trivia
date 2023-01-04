import React, { useState, useEffect } from 'react'
import { CountriesData } from '../../countries.model'

type CountriesProps = {
  countries: CountriesData[]
}

const Continents: React.FC <CountriesProps> = (countries) => {
  const continentsButtons = countries.countries.map(item => {
    return(<button>{item.name}</button>)
  })
  return (<div>
    {continentsButtons}
  </div>)
}

export default Continents