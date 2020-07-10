import React from 'react';
import "./Info.css";
import { Link } from 'react-router-dom'

const Protect = () =>{
    return (
        <div className="protect">
            <h1>How to Protect Yourself & Others</h1>
            <div className="warn">
                <p><i class="fas fa-exclamation-circle"></i> Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing serious complications from COVID-19 illness.
                                  <br />More information on <a href = "https://www.cdc.gov/coronavirus/2019-ncov/need-extra-precautions/people-at-increased-risk.html?CDC_AA_refVal=https%3A%2F%2Fwww.cdc.gov%2Fcoronavirus%2F2019-ncov%2Fneed-extra-precautions%2Fpeople-at-higher-risk.html"  rel="noopener noreferrer" target = "_blank">Are you at higher risk for serious illness.</a></p>
            </div>
            <div className="inform left">
                <h2><i class="fas fa-viruses"></i>&nbsp;  Know How It Spreads</h2>
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

                <h2><i class="fas fa-hand-sparkles"></i>&nbsp;  Wash your hands often</h2>
                <ul>
                    <li>Wash your hands often with soap and water for at least 20 seconds especially after you have been in a public place, or after blowing your nose, coughing, or sneezing.</li>
                    <li>It’s especially important to wash:
                        <ul>
                            <li>Before eating or preparing food</li>
                            <li>Before touching your face</li>
                            <li>Before touching your face</li>
                            <li>After leaving a public place</li>
                            <li>After blowing your nose, coughing, or sneezing</li>
                            <li>After handling your cloth face covering</li>
                            <li>After caring for someone sick</li>
                            <li>After touching animals or pets</li>
                            <li>If soap and water are not readily available, use a hand sanitizer that contains at least 60% alcohol. Cover all surfaces of your hands and rub them together until they feel dry.</li>
                            <li>Avoid touching your eyes, nose, and mouth with unwashed hands.</li>
                        </ul>
                    </li>
                </ul>
            </div>
            <div className="inform right">
                <h2><i class="fas fa-users"></i>&nbsp;  Avoid close contact</h2>
                <ul>
                    <li>Inside your home: Avoid close contact with people who are sick</li>
                        <ul>
                            <li>If possible, maintain 6 feet between the person who is sick and other household members.</li>
                        </ul>
                    <li>Outside your home: Put 6 feet of distance between yourself and people who don’t live in your household.
                        <ul>
                            <li>Remember that some people without symptoms may be able to spread virus.</li>
                            <li>Stay at least 6 feet (about 2 arms’ length) from other people.</li>
                            <li>Keeping distance from others is especially important for people who are at higher risk of getting very sick.</li>
                        </ul>
                    </li>
                </ul>

                <h2><i class="fas fa-file-medical-alt"></i>&nbsp;  Clean and disinfect</h2>
                <ul>
                    <li>Clean AND disinfect frequently touched surfaces daily. This includes tables, doorknobs, light switches, countertops, handles, desks, phones, keyboards, toilets, faucets, and sinks.</li>
                    <li>If surfaces are dirty, clean them. Use detergent or soap and water prior to disinfection.</li>
                    <li>Then, use a household disinfectant. Most common <a href='https://www.epa.gov/pesticide-registration/list-n-disinfectants-use-against-sars-cov-2-covid-19' without rel="noopener noreferrer"  target="_blank">EPA-registered household disinfectants</a></li>
                </ul>

                <h2><i class="fas fa-pump-medical"></i>&nbsp;  Monitor Your Health Daily</h2>
                <ul>
                    <li>Be alert for symptoms. Watch for fever, cough, shortness of breath, or other <Link to ='/sym' without rel="noopener noreferrer"  target="_blank">symptoms</Link> of COVID-19.</li>
                    <li>Take your temperature if symptoms develop.</li>
                    <li>Follow <Link to='/sick' without rel="noopener noreferrer"  target="_blank">CDC guidance</Link> if symptoms develop.</li>
                </ul>
                <br />
                    <br />
                    <br />
                    <br />
            </div>
        </div>
    );
}
export default Protect;