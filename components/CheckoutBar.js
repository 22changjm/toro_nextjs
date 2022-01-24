import styles from '../styles/CheckoutBar.module.css'
import { useEffect, useState } from 'react';
import CheckOutItem from './CheckOutItem';


const CheckoutBar = (props) => {

    const [name, setName] = useState("");

    const handleText = (event) => {
        setName(event.target.value)
    }

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
                <input className={styles.name} onChange={handleText} placeholder="Name" type="text" id="name" name="name"/>
                <button onClick={() => {
                    alert("Sorry, We are closed today")
                    return;
                    console.log(total);
                    if (total === "$0.00") {
                        alert("Please add items to cart before checking out.")
                        return;
                    } else if (name === "") {
                        alert("Please add your name.")
                        return;
                    }
                    props.checkout(name)}} id={styles.checkout} className="buttoninverse">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default CheckoutBar
