import React from 'react'
import { Link } from 'react-router-dom'
import ShowMap from './ShowMap'

const Navbar = (props) => {
    return (
      <nav className="nav-wrapper grey darken-4">
        <div className="container">
          <Link to='/covidtrack' className="brand-logo left" >COVID-19</Link>
          <ShowMap />
        </div>
      </nav>
    )
  }
  
  export default Navbar
  