import styles from '../styles/MobileCheckoutBar.module.css'
import { useEffect, useState } from 'react';
import CheckOutItem from './CheckOutItem';


const MobileCheckout = (props) => {

    const [total, setTotal] = useState("0.00");

    useEffect(()=> {
        setTotal(calculateTotal(props.items))
    }, [props.items])

    const calculateTotal = (items) => {
        const total = 0;
        for (const i = 0; i < items.length; i++) {
            if (items[i] !== null && Object.keys(items[i]).includes('price')) {
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
                        if (index===0 || value[1] === null) {
                            return;
                        }
                    return <CheckOutItem changeQuant={props.changeQuant} key={Object.entries(props.items)[index][1]['name']} desc={Object.entries(props.items)[index][1]['desc']} name={Object.entries(props.items)[index][1]['name']} count={Object.entries(props.items)[index][1]['count']} price={Object.entries(props.items)[index][1]['price']}/> 
                })
            }

            </div>

            <div className={styles.footcontainer}>
                <div className={styles.total}>{`Subtotal: ${total}`}</div>
                <button onClick={props.checkout} id={styles.checkout} className="buttoninverse">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default MobileCheckout
