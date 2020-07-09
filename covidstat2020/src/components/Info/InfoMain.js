import React from 'react';
import { NavLink } from 'react-router-dom'
//import "./ShowMap.css";

const InfoMain = () =>{
    return (
        <div >
            <NavLink to='/info' className='lV'>INFORMATION</NavLink>
        </div>
    );
}
export default InfoMain;