import React from 'react'
import styles from './EnglishLang.module.css'
import English from '../../Pictures/English.jpg'


function EnglishLang() {
    return (
        <div className={styles.main}>
            <h2>About learning english: </h2>
            <div className = {styles.English}>
                <img src = {English} width = "100%"/>
            </div>
            <p>
               Nowadays,  more and more people are dedicating time to studying English as a second language.
               There are many reasons to learn, like:
               <ul>
                    <li>English is a global language</li>
                    <li>Studying English can help you get a better job</li>
                    <li>Learning English can help you meet new people</li>
                    <li>Many scientific papers are written in English</li>
                    <li>With English, you can study all over the world</li>
                    <li>English gives you access to multiple cultures</li>
                    <li>and so on...</li>
               </ul>
               <br/>
               I'm continuing learning english by myself. For example
               i listen to the podcasts, study english books and articles, watching english films 
               and trying to speak in english to improve my skills.
            </p>  
        </div>
    )
}

export default EnglishLang
