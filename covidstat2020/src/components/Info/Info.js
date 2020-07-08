import React from 'react';
import { NavLink } from 'react-router-dom'
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
                    <p>
                        HOW TO PROTECT YOURSELF ??
                    </p>
                </div>
                <div className="links">
                    <p>
                        WHAT TO DO IF YOU ARE SICK ??
                    </p>
                </div>
            </div>
            <div className="box right">
                <div className="links">
                    <div className="upper">
                        <p>
                            SYMPTOMS OF COVID'19 ??
                        </p>
                    </div>
                </div>
                <div className="links">
                    <div className="upper">
                        <p>
                            SELF CHECK SYMPTOMS ??
                        </p>
                    </div>
                </div>
                <div className="links">
                    <div className="upper">
                        <p>
                            PEOPLE AT RISK ??
                        </p>
                    </div>
                </div>
                <div className="links">
                    <div className="upper">
                        <p>
                            SHOULD I GET TESTED ??
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Info;