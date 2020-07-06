import React from 'react'
import { Link } from 'react-router-dom'
import ShowMap from './ShowMap'
import "./ShowMap.css";

const Navbar = (props) => {

    const divStyle = {
      float: 'right',
      marginRight: '50px'
    };

    return (
      <div className="navbar">
        <ul>
          <li><Link to='/covidtrack'>COVID-19</Link></li>
          <li style={divStyle} class="active" ><ShowMap /></li>
        </ul>
      </div>
    )
  }
  
  export default Navbar
  