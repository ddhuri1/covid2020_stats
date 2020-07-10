import React from 'react';
import { NavLink } from 'react-router-dom'
import "../ShowMap/ShowMap.css";

const InfoMain = () =>{
    return (
        <div className='informationLogo'>
            <i className="fas fa-info-circle"></i><NavLink to='/info' className='lV'>&nbsp; INFORMATION</NavLink>
        </div>
    );
}
export default InfoMain;