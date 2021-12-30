import styles from '../styles/CheckoutBar.module.css'
import { useEffect } from 'react';

const CheckoutBar = (props) => {
    
    return (
        <div className={styles.container}>
           <div className={styles.title}> Checkout Cart </div>
           {props.items}
        </div>
    )
}

export default CheckoutBar
