import React from 'react'
import { Link } from 'react-router-dom'
import ShowMap from './ShowMap'
import InfoMain from '../Info/InfoMain'
import "./ShowMap.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <ul>
        <li ><i className="fas fa-viruses "></i><Link to='/covidtrack' className="lV">&nbsp;  COVID-19</Link></li>
        <li className="aR"><ShowMap /></li>
        <li className="aR"><InfoMain /></li>
      </ul>
    </div>
  )
}

export default Navbar
  