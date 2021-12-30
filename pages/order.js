import {useState, useEffect} from 'react';
import Navigbar from '../components/Navigbar'
import OrderSection from '../components/OrderSection';
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue} from "firebase/database";
import CheckOutItem from "../components/CheckOutItem"


export default function Order() {

    const [items, setItems] = useState([]);
    const [currItem, setCurrItem] = useState({})
    const [lookup, setLookup] = useState({});
    const [index, setIndex] = useState(0);
    
    useEffect(()=>{
        if (Object.keys(lookup).includes(currItem['name'])) {
            const tmp = items.slice();
            tmp[lookup[currItem['name']]]['count'] = tmp[lookup[currItem['name']]]['count'] + currItem['count'];
            tmp[lookup[currItem['name']]]['price'] = tmp[lookup[currItem['name']]]['price'] + currItem['price'] * currItem['count'];
            setItems(tmp);
            
            
        } else {
            setLookup((previousState)=>{
                const tmp = {...previousState}
                tmp[currItem['name']] = index;
                setIndex(()=>index+1);
                return tmp;

            })

            setItems((previousState)=>[...previousState, currItem])

        }
    }, [currItem])


    const AddToCheckout = async (id, price) => {

        /*const app = firebaseInit();
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
        }) */
        setCurrItem({
            name: id,
            price: price,
            count: 1
        });

        /*// REMOVE SINCE PRICE WILL BE CHOSEN
        const price = res['price']
        if (typeof price === 'object' && price !== null) {
            price = Math.min(...Object.values(price))
        }
        if (itemState && id in itemState) {
            const index = itemState[id]['index']
            const count = itemState[id]['count']
            setCheckout((previousState)=> [...(previousState.slice(0, index)) , <CheckOutItem key={id} name={id} count={count + 1} price={price}/>, ...(previousState.splice(index + 1))])
            return;
        } else {
            
            setCheckout((previousState)=> [...previousState, <CheckOutItem key={id} name={id} count={1} price={price}/>])
            const newItemState = Object.assign({}, itemState);
            newItemState[id] = {
                count: 1,
                index: itemState.length
            }
            setItemState(() => {itemState = newItemState});


        } */
             




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
          <CheckoutBar  items={items}/>
      </div>



    </>
  )
} 
