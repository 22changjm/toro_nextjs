import styles from '../styles/MobileCheckoutBar.module.css'
import { useEffect, useState } from 'react';
import CheckOutItem from './CheckOutItem';


const MobileCheckout = (props) => {
    
    const validatePhoneNumber = (phoneNumber) => {
        const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(phoneNumber)
    }
    
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")

    const [fifteen, setFifteen] = useState(false)
    const [eighteen, setEighteen] = useState(false)
    const [twenty, setTwenty] = useState(false)
    const [custom, setCustom] = useState(false)


    const handleName = (event) => {
        setName(event.target.value)
    }
    
    const handlePhoneNumber = (event) => {
      setPhoneNumber(event.target.value)
    }

    const [total, setTotal] = useState("0.00");
    const [tip, setTip] = useState("");

    const tipHandler = (event) => {
        const { key } = event;
        setTip((prevValue) =>
        key !== "Backspace"
          ? !Number.isNaN(parseInt(key)) || key === "," || key === "."
            ? prevValue + key
            : prevValue
          : prevValue.substring(0, prevValue.length - 1)
      );
    }
    const changeTotalToNumber = (total) => {
        return Number(total.slice(1))
    }

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
    const handleFifteenClick = (amount) => {
        setEighteen(false)
        setTwenty(false)
        setCustom(false)
        setFifteen(true)
        setTip(amount)
    }

    const handleEighteenClick = (amount) => {
        setFifteen(false)
        setTwenty(false)
        setCustom(false)
        setEighteen(true)
        setTip(amount)

    }
    const handleTwentyClick = (amount) => {
        setFifteen(false)
        setEighteen(false)
        setCustom(false)
        setTwenty(true)
        setTip(amount)
        console.log(tip)

    }
    const handleCustomClick = () => {
        setFifteen(false)
        setEighteen(false)
        setTwenty(false)
        setTip("")
        setCustom(true)
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
                {!props.tableNumber && <input className={styles.name} onChange={handleName} placeholder="Name" type="text" id="name" name="name"/>}
                {!props.tableNumber && <input className={styles.name} onChange={handlePhoneNumber} placeholder="Phone Number" type="text" id="phoneNumber" name="phoneNumber"/>}
                {props.tableNumber ? <div className={styles.tipcontainer}>
                                        <div onClick={() => handleFifteenClick(formatter.format(changeTotalToNumber(total) * .15))} className={fifteen ? styles.tipboxselected : styles.tipbox}>
                                            <div> 15% </div>
                                            {formatter.format(changeTotalToNumber(total) * .15)}
                                        </div>
                                        <div onClick={()=> {handleEighteenClick(formatter.format(changeTotalToNumber(total) * .18))}} className={eighteen ? styles.tipboxselected : styles.tipbox}>
                                            <div> 18% </div>
                                            {formatter.format(changeTotalToNumber(total) * .18)}
                                        </div>
                                        <div onClick={() => {handleTwentyClick(formatter.format(changeTotalToNumber(total) * .20))}} className={twenty ? styles.tipboxselected : styles.tipbox}>
                                            <div> 20% </div>
                                            {formatter.format(changeTotalToNumber(total) * .20)}
                                        </div> 
                                        
                                        <input onClick={handleCustomClick} className={custom ? styles.tipboxcustomselected : styles.tipboxcustom} onKeyDown={tipHandler} placeholder="Custom Tip" id="gratuity" name="gratuity" value={ custom? formatter.format(tip): "" }/>
                                    </div>
                     : null}
                <button onClick={() => {
                    
                    console.log(total);
                    if (total === "$0.00") {
                        alert("Please add items to cart before checking out.")
                        return;
                    } 
                    
                    if (!props.tableNumber) {
                        if (name == "") {
                            alert("Please add your Name")
                            return;
                        } else if (!validatePhoneNumber(phoneNumber)) {
                            alert("Please add a valid phone number. \nExample: 1234567890 OR (123)456-7890 OR 123-456-7890")
                            return;
                        }
                    }
                    props.checkout(name, phoneNumber, props.tableNumber, tip)}} id={styles.checkout} className="buttoninverse">
                    Checkout
                </button>
            </div>
        </div>
    )
}

export default MobileCheckout
