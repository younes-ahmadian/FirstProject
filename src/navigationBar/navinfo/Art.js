import React from 'react'
import styles from './Art.module.css'
import ReactPlayer from 'react-player';
import Titanic from '../../Videos/Titanic.mp4'
import Parandeh from '../../Videos/Parandeh.mp4'
import Bordi from '../../Videos/Bordi az yadam.mp4'
import Autumn from '../../Videos/In autumn, The leaves came to our house.mp4'
import { red } from 'chalk';
import { lightpink } from 'color-name';
import Piano1 from '../../Pictures/Piano1.jpg'
import Kor from '../../Pictures/Kor.JPG'


const mystyle = {
    backgroundColor: "blue",
     border: "solid 1px lightpink",
     display: 'inline-block',
     margin: "5px"
}

function Art() {
    
    return (
        <div className={styles.main}>
            <h2>About my art:</h2>
            <p>
               I started to learn <b>Guitar, Piano and Singing</b>.<br/>
                In my openion art brings more Creativity, Satisfaction, and Happiness into our lives.
               Art gives us meaning and helps us understand our world. Scientific studies have proven 
               that art improves our quality of life and makes us feel better about ourselves.<br/><br/>
               Here are some of my art avtivities:<br/><br/><br/>
             </p>     
              
            <div className={styles.album}>
                <span style={mystyle}>در پاییز برگها به خانه ی ما آمدند</span>
                <ReactPlayer width="100%" height="200px" controls  url = {Autumn}/>
            </div>

            <div className={styles.album}>
                <span style={mystyle}>پرنده از مانی رهنما</span>
                <ReactPlayer width="100%" height="200px" controls url = {Parandeh}/>
            </div>

            <div className={styles.album}>
                <span style={mystyle}>بردی از یادم</span>
                <ReactPlayer width="100%" height="200px" controls url = {Bordi}/>
            </div>

            <div className={styles.album}>
                <span style={mystyle}>Titanic</span>
                <ReactPlayer width="100%" height="200px" controls url = {Titanic}/>
            </div>
            <div className={styles.album}>
                <span style={mystyle}>اجرای موسیقی در فرهنگسرا</span>
                <img width="100%" height="200px" src ={Piano1} />
            </div>
            <div className={styles.album}>
                <span style={mystyle}>اجرای گروه کر</span>
                <img width="100%" height="200px" src ={Kor} />
            </div>
        
            <div style={{clear: "left"}}>
                <br/>
                <br/>
            </div>
            
        </div>
    )
}

export default Art
