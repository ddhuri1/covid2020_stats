import React from 'react';
import "./Info.css";
import { Link } from 'react-router-dom'
import image from './sym.jpg';

const Symptoms = () =>{
    return (
        <div className="protect">
            <h1>Symptoms of Coronavirus</h1>
            <div className=" lev4">
                <h3>What you need to know</h3>
                <p><i class="fas fa-check"></i>     Anyone can have mild to severe symptoms. <br />
                <i class="fas fa-check"></i>     Older adults and people who have severe underlying medical conditions like heart or lung disease or diabetes seem to be at higher risk for developing more serious complications from COVID-19 illness.</p>
            </div>
            <div className="inform left">
                <h2><i class="fas fa-stethoscope"></i>&nbsp;  Watch for symptoms</h2>
                <p> People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus. People with these symptoms may have COVID-19:</p>
                <img className='img' src={image} alt="Symptoms" />
                
            </div>

            <div className="inform right">
            <p> This list does not include all possible symptoms. CDC will continue to update this list as we learn more about COVID-19.</p>
                <div className="cardLevel level-3">
                    <a href='https://landing.google.com/screener/covid19?source=google' without rel="noopener noreferrer"  target="_blank"><h3>Self-Checker</h3>
                    <p>A guide a help you make a decision and seek appropriate medical care</p></a>
                </div>
                <br /><br /><br />
                <h2><i class="fas fa-exclamation"></i><i class="fas fa-exclamation"></i>&nbsp;  What is the difference between Influenza (Flu) and COVID-19?</h2>
                <p>Influenza (Flu) and COVID-19 are both contagious respiratory illnesses, but they are caused by different viruses. COVID-19 is caused by infection with a new coronavirus 
                    (called SARS-CoV-2) and flu is caused by infection with <a href='https://www.ncbi.nlm.nih.gov/pmc/articles/PMC2928832/' without rel="noopener noreferrer"  target="_blank"><b>influenza viruses.</b> </a>Because some of the symptoms of flu and COVID-19 are similar, 
                    it may be hard to tell the difference between them based on symptoms alone, and testing may be needed to help confirm a diagnosis. 
                    Flu and COVID-19 share many characteristics, but there are some key differences between the two.
                    <br /><br />While more is learned every day, there is still a lot that is unknown about COVID-19 and the virus that causes it. 
                    <br />This <a href='https://www.cdc.gov/flu/symptoms/flu-vs-covid19.htm' without rel="noopener noreferrer"  target="_blank">table</a> compares COVID-19 and flu, given the best available information to date.
                <br /><br />To learn more about COVID-19, visit <Link to='/covidtrack' without rel="noopener noreferrer"  target="_blank">Coronavirus (COVID-19).</Link>
                <br /><br />To learn more about flu, visit Influenza (Flu).</p>
            </div>
        </div>
    );
}
export default Symptoms;