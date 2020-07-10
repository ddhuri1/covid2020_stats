import React from 'react';
import "./Info.css";
import { Link } from 'react-router-dom'

const Test = () =>{
    return (
        <div className="protect">
            <h1><i class="fas fa-vial"></i>&nbsp;&nbsp;Testing for COVID-19</h1>
            <div className=" mapShow">
                <p><a href='https://www.google.com/search?rlz=1C1CHBF_enUS811US811&sxsrf=ALeKk01mnmbXh5SxDTdbku0eiKWE4uks0A:1594405027571&q=covid+testing&npsic=0&rflfq=1&rlha=0&rllag=42101520,-75928484,3318&tbm=lcl&ved=2ahUKEwjvkK_KpcPqAhWyl-AKHd8yBnwQtgN6BAgVECc&rldoc=1' without rel="noopener noreferrer"  target="_blank">Testing places near me!</a></p>
            </div>
            <div className="inform left">
                <h2>  Two kinds of tests are available for COVID-19:</h2>
                <ul>
                    <li><a href='https://www.cdc.gov/coronavirus/2019-ncov/testing/diagnostic-testing.html' without rel="noopener noreferrer"  target="_blank"><b>Viral Test:</b></a>
                        <p>A viral test tells you if you have a current infection.</p>
                    </li>
                    <li><a href='https://www.cdc.gov/coronavirus/2019-ncov/testing/serology-overview.html' without rel="noopener noreferrer"  target="_blank"><b>Antibody Test:</b></a>
                        <p>An antibody test might tell you if you had a past infection. An antibody test might not show if you have a current infection because it can take 1–3 weeks after infection for your body to make antibodies. Having antibodies to the virus that causes COVID-19 might provide protection from getting infected with the virus again. If it does, we do not know how much protection the antibodies might provide or how long this protection might last.</p>
                    </li>
                </ul>
                <div className="warn">
                    <p><i class="fas fa-exclamation-circle"></i> If you test positive or negative for COVID-19 on a viral or an antibody test, you still should take preventive 
                        <Link to = "/protect"  rel="noopener noreferrer" target = "_blank"> measures to protect yourself and others.</Link></p>
                </div>
                </div>
            <div className="inform right">
                <h2>  How to get tested for current COVID-19 infection</h2>
                <ul>
                    <li>To learn if you have a current infection, viral tests are used. Most people have mild illness and can recover at home without medical care. Contact your healthcare provider if your symptoms are getting worse or if you have questions about your health.​​</li>
                    <br /><li>Decisions about testing are made by state and localexternal icon health departments or healthcare providers. You can visit your state or localexternal icon health department’s website to look for the latest local information on testing.</li>
                    <br /><li>If you have symptoms of COVID-19 and want to get tested, call your healthcare provider first.</li>
                    <br /><li>If you have symptoms of COVID-19 and are not tested, it is important to stay home. Learn what to do <Link to = "/sick"  rel="noopener noreferrer" target = "_blank">if you are sick.</Link></li>                
                    <br />
                    <br />
                    <br />
                    <br />
                </ul>
            </div>
            <br />
            <br />
            <br />
            <br />
           
            
        </div>
    );
}
export default Test;