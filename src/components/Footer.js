import React from 'react'
import styles from './Footer.module.css';

function Footer() {
    return (
        <>
         <div className={styles.footer}> 
            <h2 style={{margin: 0}}>Contact</h2>
            <p>
                Tel: 09358216590<br />
                Email: younes_ahmadian@yahoo.com<br />
                Address: Tehran
            </p>
         </div>   
        </>
    )
}

export default Footer
