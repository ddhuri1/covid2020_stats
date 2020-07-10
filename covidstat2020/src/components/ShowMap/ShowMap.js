import React from 'react';
import { NavLink } from 'react-router-dom'
import "./ShowMap.css";

const ShowMap = () =>{
    return (
        <div className="tooltip">
        <i class="fas fa-map-marked"></i><NavLink to='/map' className='lV'>&nbsp; MAP VIEW</NavLink>
        </div>
    );
}
export default ShowMap;