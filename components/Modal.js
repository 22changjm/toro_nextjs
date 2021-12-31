import React, {useEffect, useState} from 'react'
import styles from '../styles/Modal.module.css'
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, onValue, ref } from 'firebase/database';
import CheckBox from './CheckBox';


const Modal = (props) => {

    const [prices, setPrices] = useState({})

    useEffect(async ()=>{
        const app = firebaseInit();
        const db = getDatabase(app);
        const lookup = ref(db, `/Lookup/${props.title}`);
        const promise = new Promise((resolve, reject)=> {
            onValue(lookup, (snapshot)=> {
                const data = snapshot.val();
                resolve(data);
            })
        })
        const [category, type] = await promise.then((data)=> {
            return [data['category'], data['type']];
        })
         
        const menuEntry = ref(db, `/Menu/${type}/${category}/${props.title}`);
        promise = new Promise((resolve, reject)=> {
            onValue(menuEntry, (snapshot)=> {
                const data = snapshot.val();
                resolve(data);
            })
        })
        const res = await promise.then((data)=> {
            return data;
        })
        if (typeof res['price'] === 'object' && res['price'] !== null) {
            setPrices(res['price'])
        } else {
            setPrices(res['price']);
        }
        console.log(res['price']);

    }, [props.title]);


    return (
        <div>
            <div className={styles.modaloverlay} id={styles.modaloverlay}></div>
            <div className={styles.modal} id={styles.modal}>
            <button onClick={props.handleClick} className={styles.closebutton} id={styles.closebutton}>X</button>
            <div className={styles.modalguts}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                {<CheckBox styleName={styles.checkBox}prices={prices}/>}
                <div className={styles.txtTitle}> Notes (150 Characters)&#58; </div>
                <textarea maxlength={150} id={styles.notes} name="notes"/>
                <button id={styles.button} onClick={()=>{props.addToCart(props.title, props.price)}}className="buttoninverse">Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Modal
