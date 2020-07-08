import React from 'react'
import { Link } from 'react-router-dom'
import ShowMap from './ShowMap'
import InfoMain from '../Info/InfoMain'
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
          <li style={divStyle} className="active" ><ShowMap /></li>
          <li style={divStyle} className="active" ><InfoMain /></li>
        </ul>
      </div>
    )
  }
  
  export default Navbar
  