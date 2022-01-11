import styles from '../styles/CheckOutItem.module.css'
import { useEffect } from 'react';

const ReceiptItem = (props) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

    return (
        <div className={styles.outer}>
            <div className={styles.container}>
               <div className={styles.name}>{props.name}</div>
               <div className={styles.quantcontainer}>
                    <div className={styles.count}>{props.count}</div>
               </div>
               <div className={styles.price}>{formatter.format(props.price)}</div>
            </div> 
            {
              props.desc ? <div className={styles.notes}>
              Notes: &quot;{props.desc}&quot;
            </div>: null
            }
        </div>
           
    )
}

export default ReceiptItem
