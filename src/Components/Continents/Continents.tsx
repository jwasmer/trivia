import React, { useState, useEffect } from 'react'
import { CountriesData } from '../../countries.model'

type CountriesProps = {
  countries: CountriesData[]
}

const Continents: React.FC <CountriesProps> = (countries) => {
  console.log('countries', countries.countries)
  const continents = countries.countries.map(item => {
    return item.name
  })
  return <div>
    {continents}
  </div>
}

export default Continents