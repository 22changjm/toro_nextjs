import styles from '../styles/CheckOutItem.module.css'
import { useEffect } from 'react';

const CheckOutItem = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

    return (
        
           <div className={styles.container}>
               <div className={styles.name}>{props.name}</div>
               <div className={styles.quantcontainer}>
                    <button onClick={() => { props.changeQuant("-", props.name)}} className={styles.minus}>-</button> 
                    <div className={styles.count}>{props.count}</div>
                    <button onClick={ () => {props.changeQuant("+", props.name)}} className={styles.plus}>+</button>
               </div>
               <div className={styles.price}>{formatter.format(props.price)}</div>
            </div> 
    )
}

export default CheckOutItem
