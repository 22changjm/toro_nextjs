import styles from '../styles/CheckOutItem.module.css'
import { useEffect } from 'react';

const CheckOutItem = (props) => {

    return (
           <div className={styles.container}>
               <div className={styles.name}>{props.name}</div>
               <div className={styles.count}>{props.count}</div>
               <div className={styles.price}>{props.price}</div>
            </div> 
    )
}

export default CheckOutItem
