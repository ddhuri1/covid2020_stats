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

//mapboxgl.accessToken = "pk.eyJ1IjoiZGRodXJpMSIsImEiOiJja2M3eGN1am0wbmFzMnJvNHU5MHA4OXN1In0.Ckmy4NZe95uJZ75Vxzkh0w";
//mapboxgl.accessToken = "sk.eyJ1IjoiZGRodXJpMSIsImEiOiJja2M3eGhheDUxNjkwMnJvYmI2Z3c5eGhzIn0.qPvEQbHWS1Pd5JPhO_SXqw";
