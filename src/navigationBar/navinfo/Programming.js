import React from 'react'
import styles from './Programming.module.css'
import Program from '../../Pictures/Programming.jpg'


function Programming() {
    return (
        <div className={styles.main}>
   
            <h2>About Programming:</h2>

            <div className = {styles.pic}>
            <img src = {Program} width="100%" />
            </div>

            <p>
                In my idea looking for a field that i love to work and enjoy
                when i'm doing this is very important. 
                So i found that programming is the best field that is compatible with me and 
                i love to work.<br/>
                But which field of Programming?
                <br/>
                <br/>
                When i Know myself and fields of programming 
                i found "<b>Website programming</b>" is the best one i love to do.
                So i tried to start learning by myself from english sources and started to make my own website.
                I will develope my site gradually. I try to learn more and more...
                <br/><br/>
                <span style = {{fontWeight: "bold", color: "lime", fontSize: "22px"}} >
                    I know that i will be a proffesional programmer in the near future.</span>
            </p>
        </div>
    )
}

export default Programming
