import React from 'react';
import { Link } from 'react-router-dom'
import "./Info.css";

const Info = () =>{
    return (
        <div className="infoMain">
            <div className="box left">
                <div className="information">
                    <h2>Facts About CoronaVirus</h2>
                    <p>Get information on symptoms, testing, what to do if you are sick, and at risk groups. Find tips for managing your daily life, including going out, running errands, and coping with stress.</p>
                </div>
                <div className="links">
                    <p><Link to='/protect' className="link"> HOW TO PROTECT YOURSELF ??</Link></p>
                </div>
                <div className="links">
                    <p><Link to='/sick' className="link"> WHAT TO DO IF YOU ARE SICK ??</Link></p>
                </div>
            </div>
            <div className="box right">
                <div className="links">
                    <p><i className="fas fa-head-side-cough fa-2x" />
                    <Link to='/sym' className="link">SYMPTOMS OF COVID'19 ??</Link></p>
                </div>
                <div className="links">
                    <p><i class="fas fa-user-md fa-2x" /><a className="linkS" href='https://landing.google.com/screener/covid19?source=google' without rel="noopener noreferrer"  target="_blank">SELF CHECK SYMPTOMS ??</a></p>
                </div>
                <div className="links">
                    <p><i class="fas fa-people-arrows fa-2x" /><Link to='/people' className="link">PEOPLE AT RISK ??</Link></p>
                </div>
                <div className="links">
                    <p><i class="fas fa-vials fa-2x" /><Link to='/test' className="link">SHOULD I GET TESTED ??</Link></p> 
                </div>
            </div>
            
        </div>
    );
}
export default Info;