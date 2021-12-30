import {useState, useEffect} from 'react';
import Navigbar from '../components/Navigbar'
import OrderSection from '../components/OrderSection';
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue} from "firebase/database";
import CheckOutItem from "../components/CheckOutItem"


export default function Order() {

    const [checkout, setCheckout] = useState([]);

    const AddToCheckout = async (id) => {
        const app = firebaseInit();
        const db = getDatabase(app);
        const lookup = ref(db,`/Lookup`);

        const promise = new Promise((resolve, reject) => {
            onValue(lookup, (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            })
        })

        const res = await promise.then((data)=> {
            return data[id];
            
        })
        const {category, type} = res;
        const entry = ref(db, `/Menu/${type}/${category}`)

        promise = new Promise((resolve, reject) => {
            onValue(entry, (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            })
        })

        res = await promise.then((data)=> {
            return data[id];
        })
        


        // REMOVE SINCE PRICE WILL BE CHOSEN
        const price = res['price']
        if (typeof price === 'object' && price !== null) {
            price = Math.min(...Object.values(price))
        }
        const newEntry = CheckOutItem(id,1,price);
        setCheckout([...checkout, newEntry])




    }
  return (
    <>
      <Navigbar/>
      <div className={styles.container}>
          <div className={styles.menu}>
            {OrderSection('Sushi Bar', 'Sushi and Sashimi', AddToCheckout)}
            {OrderSection('Sushi Bar', 'Classic Rolls', AddToCheckout)}
            {OrderSection('Sushi Bar', 'Baked Rolls', AddToCheckout)}
            {OrderSection('Sushi Bar', 'Tempura Rolls', AddToCheckout)}
            {OrderSection('Sushi Bar', 'Fresh Rolls', AddToCheckout)}
            {OrderSection('Sushi Bar', 'Specialty Rolls', AddToCheckout)}
            {OrderSection('Sushi Bar', 'Sushi Bar Special', AddToCheckout)}

            {OrderSection('Kitchen', 'Appetizers', AddToCheckout)}
            {OrderSection('Kitchen', 'Salads', AddToCheckout)}
            {OrderSection('Kitchen', 'Toro Specialties', AddToCheckout)}
            {OrderSection('Kitchen', 'Entrees', AddToCheckout)}
            {OrderSection('Kitchen', 'Tempura', AddToCheckout)}
            {OrderSection('Kitchen', 'Rice', AddToCheckout)}
            {OrderSection('Kitchen', 'Noodles', AddToCheckout)}
            {OrderSection('Kitchen', 'Soup', AddToCheckout)}
            {OrderSection('Kitchen', 'Dessert', AddToCheckout)}
          </div>
          <div className={styles.placeholder}></div>
          <CheckoutBar items={checkout}/>
      </div>



    </>
  )
} 
