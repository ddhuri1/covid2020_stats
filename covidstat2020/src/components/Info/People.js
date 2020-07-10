import React from 'react';
import "./people.css";
import image from './people.jpg';
import imageAge from './age.png';

const People = () =>{
    return (
        <div className="precautions">
            <div>
                <img className='peopImg' src={image} alt="Symptoms" />  
                <h1>People Who Need to Take Extra Precautions</h1>
                <ol>
                    <div className="inform left">
                        <li><b>Racial & Ethnic Minority Groups:</b><br />
                        Long-standing systemic health and social inequities have put some members of racial and ethnic minority groups at increased risk of getting COVID-19 or experiencing severe illness, regardless of age. Among some racial and ethnic minority groups, including non-Hispanic black persons, Hispanics and Latinos, and American Indians/Alaska Natives, evidence points to higher rates of hospitalization or death from COVID-19 than among non-Hispanic white persons. As of June 12, 2020, age-adjusted hospitalization rates are highest among non-Hispanic American Indian or Alaska Native and non-Hispanic black persons, followed by Hispanic or Latino persons.
                        <br /><br /><img className='ageImg' src={imageAge} alt='Age Chart' />
                        <br /><p>History shows that severe illness and death rates tend to be higher for racial and ethnic minority populations during public health emergencies than for other populations. Addressing the needs of these populations in emergencies includes improving day-to-day life and harnessing the strengths of these groups. Shared faith, family, and cultural institutions are common sources of social support. These institutions can empower and encourage individuals and communities to take action to prevent the spread of COVID-19, care for those who become sick, and help community members cope with stress.
                        <br /><br />Health differences between racial and ethnic groups result from inequities in living, working, health, and social conditions that have persisted across generations. In public health emergencies, such as the COVID-19 pandemic, these conditions can also isolate people from the resources they need to prepare for and respond to outbreaks.</p>
                        </li>
                        <li><b>People Experiencing Homelessness:</b><br />
                            <p>Homeless services are often provided in congregate settings, which could facilitate the spread of infection. Because many people who are homeless are older adults or have underlying medical conditions, they may also be at higher risk for severe disease.
                            <br />Health departments and healthcare facilities should be aware that people who are homeless are a particularly vulnerable group. If possible, identifying non-congregate settings where those at highest risk can stay may help protect them from COVID-19.</p>
                            <p> How people experiencing homelessness can protect themselves</p>
                            <ul>
                                <li>Try to avoid other crowded public settings.</li>
                                <li>If using public <a href='https://www.cdc.gov/coronavirus/2019-ncov/daily-life-coping/using-transportation.html' rel="noopener noreferrer" target='_blank'>transportation</a>, follow the CDC guidance on how to protect yourself when using transportation, try to travel during less busy times, and clean your hands as soon as possible after their trip.</li>
                                <li>If possible, use take-away options for food.</li>
                                <li>Maintain a distance of 6 feet (about two arms’ length) from other people.</li>
                                <li>Wash their hands with soap and water for at least 20 seconds as often as possible, and cover their coughs and sneezes.</li>
                            </ul><br />
                        </li>
                    </div>
                    <div className="inform right">
                        <li><b>If You Are Pregnant, Breastfeeding, or Caring for Young Children</b><br />
                        Based on what we know at this time, pregnant people might be at an increased risk for severe illness 
                        from COVID-19 compared to non-pregnant people. Additionally, there may be an increased risk of adverse 
                        pregnancy outcomes, such as preterm birth, among pregnant people with COVID-19.<br />
                            Therefore, if you are pregnant, be mindful about reducing your risk of getting sick. 
                            If you are caring for children, you can teach them everyday steps (such as proper handwashing) 
                            to help them stay healthy and, in turn, help protect yourself and your family.                            
                            <p>Reduce your risk of getting COVID-19.</p>
                            <ul>
                                <li>Limit your interactions with other people as much as possible.</li>
                                <li>Take precautions to prevent getting COVID-19 when you do interact with others.</li>
                                <li>Do not skip your prenatal care appointments.</li>
                                <li>Make sure that you have at least a 30-day supply of your medicines.</li>
                                <li>If you start feeling sick and think you may have COVID-19, call your healthcare provider within 24 hours.</li>
                                <li>Talk to your healthcare provider about how to stay healthy and take care of yourself during the COVID-19 pandemic.</li>
                                <li>Seek care immediately if you have a medical emergency.</li>
                                <li>You may feel increased stress during this pandemic. Fear and anxiety can be overwhelming and cause strong emotions. Learn about stress and coping.</li>
                            </ul>
                            <br />
                        </li>
                        <li><b>People with Disabilities and Disorders:</b><br />
                        Disability alone may not be related to higher risk for getting COVID-19 or having severe illness.
                            Most people with disabilities are not inherently at higher risk for becoming infected with or having 
                            severe illness from COVID-19.  However, some people with disabilities might be at a higher risk of 
                            infection or severe illness because of their underlying medical conditions.  
                            All people seem to be at higher risk of severe illness from COVID-19 if they have serious underlying chronic medical conditions like chronic lung disease, 
                            a serious heart condition, or a weakened immune system. Adults with disabilities are three times more likely
                            than adults without disabilities to have heart disease, stroke, diabetes, or cancer than adults without disabilities.
                            
                            <br /><br />Developmental and behavioral disorders are a group of conditions due to an impairment in physical, learning, language, or behavior areas. These conditions begin during the developmental period, may affect day-to-day functioning, and usually last throughout a person’s lifetime.
                            <br />Most people with developmental or behavioral disorders are not naturally at higher risk for becoming infected with or having severe illness from novel coronavirus (COVID-19). However, people with developmental or behavioral disorders who have serious underlying medical conditions may be at risk of serious illness. Some people with developmental or behavioral disorders may have difficulties accessing information, understanding or practicing preventative measures, and communicating symptoms of illness.
                            
                            <p>f you have one of the disability types listed below, you might be at increased risk of becoming infected or having unrecognized illness.  You should discuss your risk of illness with your healthcare provider.</p>
                            <ul>
                                <li>People who have limited mobility or who cannot avoid coming into close contact with others who may be infected, such as direct support providers and family members</li>
                                <li>People who have trouble understanding information or practicing preventive measures, such as hand washing and social distancing</li>
                                <li>People who may not be able to communicate symptoms of illness</li>
                                <li>Make sure that you have at least a 30-day supply of your medicines.</li>
                                <li>If you start feeling sick and think you may have COVID-19, call your healthcare provider within 24 hours.</li>
                                <li>Talk to your healthcare provider about how to stay healthy and take care of yourself during the COVID-19 pandemic.</li>
                                <li>Seek care immediately if you have a medical emergency.</li>
                                <li>You may feel increased stress during this pandemic. Fear and anxiety can be overwhelming and cause strong emotions. Learn about stress and coping.</li>
                            </ul>
                        </li>
                    </div>
                </ol>
            </div> 
        </div>
    );
}
export default People;