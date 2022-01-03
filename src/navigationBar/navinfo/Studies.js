import React from 'react'
import styles from './Studies.module.css'
import Book from '../../Pictures/Study.jpg'


function Studies() {
    return (
        <div className={styles.main}>
            <h2>About my Studies:</h2>
            <div className = {styles.Study}>
                <img src = {Book} width = "100%"/>
            </div>
            <p>
                These days it needs to know more about different aspects of our lives
                to improve our productivity and mental health to live better.<br/>
            
                In my free times i like to study about different things like:
               <ul>
                   <li> Psychology</li>
                   <li> Philosophy</li>
                   <li>Modern technology articles</li>
                   <li>Medical articles</li>
                   <li>and so on...</li>
               </ul>
               <br/><br/>
               Here are some of my books that i have studied and help me so much:<br/><br/>

               <table>
                <thead>
                    <tr>
                       <th>Row</th>
                       <th>Books</th>
                    </tr>
                </thead>
                
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>جامعه شناسی گیدنز</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>کلیات فلسفه</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>چگونه با هرکسی صحبت کنیم</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>مردان مریخی و زنان ونوسی</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>باورهای غلط شما</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>... و</td>
                    </tr>
                </tbody>
                   
               </table>
            </p>  
        </div>
    )
}

export default Studies
