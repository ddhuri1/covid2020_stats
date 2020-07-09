import React from 'react';
import "./Info.css";
import { Link } from 'react-router-dom'

const Sick = () =>{
    return (
        <div className="protect">
            <h1>What to Do If You Are Sick</h1>
            <div className="warn">
                <p><i class="fas fa-exclamation-circle"></i> If you have a fever, cough or other symptoms, you might have COVID-19. Most people have mild illness and are able to recover at home. If you think you may have been exposed to COVID-19, contact your healthcare provider.</p>
            </div>
            <div className="cardLevel level-3">
                <a href='https://landing.google.com/screener/covid19?source=google' without rel="noopener noreferrer"  target="_blank"><h3>Self-Checker</h3>
                <p>A guide a help you make a decision and seek appropriate medical care</p></a>
            </div>
            <div className="inform left">
                <h2><i class="fas fa-house-user"></i>&nbsp;  Stay home except to get medical care</h2>
                <ul>
                    <li> <b>Stay home. </b>Most people with COVID-19 have mild illness and can recover at home without medical care. Do not leave your home, except to get medical care. Do not visit public areas.</li>
                    <li><b>Take care of yourself. </b>Get rest and stay hydrated. Take over-the-counter medicines, such as acetaminophen, to help you feel better.</li>
                    <li><b>Stay in touch with your doctor. </b>Call before you get medical care. Be sure to get care if you have trouble breathing, or have any other emergency warning signs, or if you think it is an emergency.</li>
                    <li><b>Avoid public transportation, </b>ride-sharing, or taxis.</li>
                </ul>

                <h2><i class="fas fa-users"></i>&nbsp;  Separate yourself from other people</h2>
                <ul>
                    <li>As much as possible, stay in a specific room and away from other people and pets in your home. If possible, you should use a separate bathroom. If you need to be around other people or animals in or outside of the home, wear a cloth face covering.</li>
                    <li>You should wear a cloth face covering, over your nose and mouth if you must be around other people or animals, including pets (even at home).</li>
                    <li>You don’t need to wear the cloth face covering if you are alone. If you can’t put on a cloth face covering (because of trouble breathing, for example), cover your coughs and sneezes in some other way. Try to stay at least 6 feet away from other people. This will help protect the people around you.</li>
                    <li>Cloth face coverings should not be placed on young children under age 2 years, anyone who has trouble breathing, or anyone who is not able to remove the covering without help.</li>
                </ul>

                <h2><i class="fas fa-head-side-mask"></i>&nbsp;  Cover your coughs and sneezes</h2>
                <ul>
                    <li><b>Cover your mouth and nose</b> with a tissue when you cough or sneeze.</li>
                    <li><b>Throw away</b> used tissues in a lined trash can.</li>
                    <li>Immediately <b>wash your hands</b> with soap and water for at least 20 seconds. If soap and water are not available, clean your hands with an alcohol-based hand sanitizer that contains at least 60% alcohol.</li>
                </ul>
            </div>
            <div className="inform right">
                <h2><i class="fas fa-user-check"></i>&nbsp;  Monitor your symptoms</h2>
                <ul>
                    <li><Link to ='/sym' without rel="noopener noreferrer"  target="_blank"><b>Symptoms</b></Link> of COVID-19 include fever, cough, or other symptoms.</li>
                    <li>Follow care instructions from your healthcare provider and local health department. Your local health authorities may give instructions on checking your symptoms and reporting information.</li>
                    <li>Look for <b>emergency warning signs</b> for COVID-19. If someone is showing any of these signs, seek emergency medical care immediately:
                        <ul>
                            <li>Trouble breathing</li>
                            <li>Persistent pain or pressure in the chest</li>
                            <li>New confusion</li>
                            <li>Inability to wake or stay awake</li>
                            <li>Bluish lips or face</li>
                        </ul>
                    </li>
                    <li><b>Call 911</b> or call ahead to your local emergency facility: Notify the operator that you are seeking care for someone who has or may have COVID-19.</li>
                </ul>

                <h2><i class="fas fa-hands-wash"></i>&nbsp;  Clean all “high-touch” surfaces everyday</h2>
                <p>High-touch surfaces include phones, remote controls, counters, tabletops, doorknobs, bathroom fixtures, toilets, keyboards, tablets, and bedside tables.</p>
                <ul>
                    <li><b>Clean and disinfect </b>high-touch surfaces in your “sick room” and bathroom; wear disposable gloves. Let someone else clean and disinfect surfaces in common areas, but you should clean your bedroom and bathroom, if possible.</li>
                    <li><b>If a caregiver or other person needs to clean and disinfect</b> a sick person’s bedroom or bathroom, they should do so on an as-needed basis. The caregiver/other person should wear a mask and disposable gloves prior to cleaning. They should wait as long as possible after the person who is sick has used the bathroom before coming in to clean and use the bathroom.</li>
                    <li>Clean and disinfect areas that may have blood, stool, or body fluids on them.</li>
                    <li>Use household cleaners and disinfectants. Clean the area or item with soap and water or another detergent if it is dirty. Then, use a household disinfectant.</li>
                </ul>
            </div>
        </div>
    );
}
export default Sick;