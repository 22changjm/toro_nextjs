import styles from '../styles/CheckoutBar.module.css'
import { useEffect } from 'react';
import CheckOutItem from './CheckOutItem';

const CheckoutBar = (props) => {
 
    return (
        <div className={styles.container}>
           <div className={styles.title}> Checkout Cart </div>

           
           {   
                Object.entries(props.items).map((value, index)=> {
                return <CheckOutItem key={Object.entries(props.items)[index][1]['name']} name={Object.entries(props.items)[index][1]['name']} count={Object.entries(props.items)[index][1]['count']} price={Object.entries(props.items)[index][1]['price']}/> 
               })
           }
        </div>
    )
}

export default CheckoutBar
