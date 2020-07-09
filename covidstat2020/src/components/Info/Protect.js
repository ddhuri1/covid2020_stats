import React from 'react';
import "./Info.css";

const Protect = () =>{
    return (
        <div className="protect">
            <h1>How to Protect Yourself & Others</h1>
            <div className="warn">
                <p><i class="fas fa-exclamation-circle"></i> Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing serious complications from COVID-19 illness.
                                  <br />More information on <a href = "https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-increased-risk.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fneed-extra-precautions%2Fpeople-at-higher-risk.html"  rel="noopener noreferrer" target = "_blank">Are you at higher risk for serious illness.</a></p>
            </div>
            <div className="inform">
                <h2>Know How It Spreads</h2>
                <ul>
                    <li>There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19)</li>
                    <li>The best way to prevent illness is to avoid being exposed to this virus</li>
                    <li>The virus is thought to spread mainly from person-to-person.
                        <ul>
                            <li>Between people who are in close contact with one another (within about 6 feet).</li>
                            <li>Through respiratory droplets produced when an infected person coughs, sneezes or talks.</li>
                            <li>These droplets can land in the mouths or noses of people who are nearby or possibly be inhaled into the lungs.</li>
                            <li>Some recent studies have suggested that COVID-19 may be spread by people who are not showing symptoms.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
}
export default Protect;