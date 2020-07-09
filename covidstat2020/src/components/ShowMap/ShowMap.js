import React from 'react';
import { NavLink } from 'react-router-dom'
import "./ShowMap.css";

const ShowMap = () =>{
    return (
        <div className="tooltip">
            <NavLink to='/map' className='lV'>MAP VIEW</NavLink>
        </div>
    );
}
export default ShowMap;