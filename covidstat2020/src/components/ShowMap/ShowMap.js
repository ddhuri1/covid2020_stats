import React from 'react';
import { NavLink } from 'react-router-dom'

const ShowMap = () =>{
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/map'>MAP VIEW</NavLink></li>
            </ul>
        </div>
    );
}
export default ShowMap;

