import React from 'react';
import { NavLink } from 'react-router-dom'
//import "./ShowMap.css";

const InfoMain = () =>{
    return (
        <div className="tooltip">
            <NavLink to='/info' >INFORMATION</NavLink>
        </div>
    );
}
export default InfoMain;