import styles from '../styles/CheckoutBar.module.css'
import { useEffect, useState } from 'react';
import CheckOutItem from './CheckOutItem';


const CheckoutBar = (props) => {

    const [total, setTotal] = useState("0.00");

    useEffect(()=> {
        setTotal(calculateTotal(props.items))
    }, [props.items])

    const calculateTotal = (items) => {
        const total = 0;
        for (const i = 0; i < items.length; i++) {
            console.log(items[i])
            if (Object.keys(items[i]).includes('price')) {
                total += items[i]['price']
            }
        }
        return formatter.format(total)

        
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })
 
    return (
        <div className={styles.container}>
            <div className={styles.topcontainer}>
            <div className={styles.title}> Checkout Cart </div>
                    

            
            {   
                    Object.entries(props.items).map((value, index)=> {
                    return <CheckOutItem key={Object.entries(props.items)[index][1]['name']} name={Object.entries(props.items)[index][1]['name']} count={Object.entries(props.items)[index][1]['count']} price={Object.entries(props.items)[index][1]['price']}/> 
                })
            }

            </div>

            <div className={styles.footcontainer}>
                <div className={styles.total}>{`Subtotal: ${total}`}</div>
            </div>
        </div>
    )
}

export default CheckoutBar
