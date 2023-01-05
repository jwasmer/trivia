import React, { useState, useEffect, ButtonHTMLAttributes } from 'react'
import { CountriesData } from '../../countries.model'
import { NavLink } from 'react-router-dom'
import './Trivia.css'
 
type CountriesProps = {
 countries: CountriesData[]
}
 
const Trivia: React.FC <CountriesProps> = (countries) => {
 const [selectedCountry, setSelectedCountry] = useState({})
 const continentsButtons: JSX.Element[] = countries.countries.map(item => {
   return(
     <NavLink to={`/play/${item.code}`}>
       <button className="continent-button" id={item.code} onClick={() => assignData(item)} key={item.code}>{item.name}</button>
     </NavLink>
   )
 })
 const assignData = (item: {}) => {
   setSelectedCountry(item)
 }
 
 return (
   <div className="continent-selection-content">
     <img className="earth-gif" src={'https://media.giphy.com/media/VI2UC13hwWin1MIfmi/giphy.gif'} alt="rotating earth gif" data-cy="earth-gif"/>
     <div className='mc-buttons'>
       <button className="mc-button" id="mc-a">Tunisia!</button>
       <button className="mc-button" id="mc-b">Algeria!</button>
       <button className="mc-button" id="mc-c">Libya!</button>
       <button className="mc-button" id="mc-d">Morocco!</button>
     </div>
   </div>
 )
}
 
export default Trivia