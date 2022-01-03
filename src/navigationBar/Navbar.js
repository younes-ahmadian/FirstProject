import React from 'react'
import {Link} from 'react-router-dom';
import styles from './Navbar.module.css'

function Navbar() {
    return (
        <>
           <div className={styles.navbar}> 
         
              <ul className={styles.navi}>
                    
                    <li>
                    <a>Work</a>
                        <div className={styles.dropdownContent}>
                        <div><Link to="/ParsRegulator">Pars Regulator</Link></div>
                        <div><Link to="/RayanKhodro">Rayan Khodro Andish</Link></div>
                        <div><Link to ="/Programming">Programming</Link></div>
                        </div>
                    </li>
                    <li>
                    <Link to = "/Art">Art</Link>
                    </li>
                    <li>
                        <Link to = "/EnglishLang">English Language</Link>
                    </li>
                    <li>
                        <Link to = "/Exercise">Exercise</Link>
                    </li>
                    <li>
                        <Link to = "/Studies">Studies</Link>
                    </li>
                    <li style={{float: 'right', paddingRight: '20px'}}>
                        <Link to="/"> Home</Link>
                    </li>
                    
                </ul>
              
            </div>  
        </>
    )
}

export default Navbar
