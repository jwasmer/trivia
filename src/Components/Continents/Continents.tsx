import React, { useState, useEffect } from 'react'
import { CountriesData } from '../../countries.model'

type CountriesProps = {
  countries: CountriesData[]
}

const Continents: React.FC <CountriesProps> = (countries) => {
  return(
    <h2>Hello World</h2>
  )
}

export default Continents