import React from 'react'
import { Link } from 'react-router-dom'
import ShowMap from './ShowMap/ShowMap'

const Navbar = (props) => {
    return (
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">COVID-19</Link>
          <ShowMap />
        </div>
      </nav>
    )
  }
  
  export default Navbar
  