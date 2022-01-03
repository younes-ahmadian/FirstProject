import React from 'react'
import styles from './Exercise.module.css'
import Exercising from '../../Pictures/Exercise.jpeg'


function Exercise() {
    return (
        <div className={styles.main}>
            <h2>About exercising:</h2>
            <div className = {styles.Exercising}>
            <img src = {Exercising} width = "100%" />
            </div>
           
            <p>
                Physical activity is a great way to increase our physical and mental health.<br/>
                Doing exercise can:
                <ul>
                    <li> Improve our memory and brain function (all age groups)</li>
                    <li>Protect against many chronic diseases</li>
                    <li>Lower blood pressure and improve heart health</li>
                    <li>Improve our quality of sleep</li>
                    <li> Reduce feelings of anxiety and depression</li>
                    <li>Increase life span</li>
                    <li>And etc.</li>
                </ul>

                In short exercising improves our quality of life.<br/><br/>
                <dl>
                    <dt>I would like to do some exercises like:</dt>
                    <dd>- Running</dd>
                    <dd>- Climbing mountains and going to nature</dd>
                    <dd>- Walking</dd>
                    <dd>- Biking</dd>
                </dl>
                
            </p>  
        </div>
    )
}

export default Exercise
