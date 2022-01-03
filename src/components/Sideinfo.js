import React from 'react'
import styles from './Sideinfo.module.css'

function Sideinfo() {
    return (
        
      <div className={styles.left}>
        <h3>Brief biography</h3>
        <p>My name is <b>Younes Ahmadian</b>. I'm 30 years old and live in Tehran.
           My bachelor is electrical engineering but i love
           to be a professional programmer.<br/><br/>

           Some of my Personality characteristics are:
           <ul>

             <li>Honesty and integrity</li>
             <li>Reliability and responsibility</li>
             <li>Teamwork</li>
             <li>Professionalism</li>
             <li>Willingness to learn</li>
             <li>Innovative ideas</li>
             <li>Problem-solving abilities</li>
             <li>Ambitious</li>
             <li>Positive attitude</li>
             <li>Emotional intelligence</li>
             <li>Creativity</li>
           </ul>
        </p> 
      </div>
    )
}

export default Sideinfo
