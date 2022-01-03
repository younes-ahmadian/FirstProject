import React from 'react'
import styles from './Header.module.css';


function Header() {
    return (
        <>
         <div className={styles.header}> 
            <h1>Welcome!</h1>
            <p>Here are information about <b>Younes Ahmadian</b>.</p>
         </div>

        </>
    )
}

export default Header
