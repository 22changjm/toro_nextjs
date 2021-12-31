import {useState, useEffect} from 'react';
import Navigbar from '../components/Navigbar'
import OrderSection from '../components/OrderSection';
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue} from "firebase/database";
import CheckOutItem from "../components/CheckOutItem"
import Modal from "../components/Modal";


export default function Order() {

    const [items, setItems] = useState([]);
    const [currItem, setCurrItem] = useState({})
    const [lookup, setLookup] = useState({});
    const [index, setIndex] = useState(0);

    const [openStatus, setOpenStatus] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalPrice, setModalPrice] = useState(0);

    const closeModal = () => {

        setOpenStatus(!openStatus)
    }

    const openModal = (name, desc, price) => {
    
        setModalTitle(name);
        setModalDescription(desc);
        console.log(price);
        setModalPrice(price);
        setOpenStatus(!openStatus)
    }

    useEffect(()=> {}, [openStatus])
    
    useEffect(()=>{
        console.log(items[1])
        if (Object.keys(lookup).includes(currItem['name'])) {
            const tmp = items.slice();
            tmp[lookup[currItem['name']]]['count'] = tmp[lookup[currItem['name']]]['count'] + currItem['count'];
            tmp[lookup[currItem['name']]]['price'] = tmp[lookup[currItem['name']]]['count'] * currItem['price'];
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
        setCurrItem({
            name: id,
            price: price,
            count: 1
        });
        setOpenStatus(!openStatus)
  

    }
  return (
    <>
      <Navigbar/>
      {openStatus && <Modal title={modalTitle} description={modalDescription} price={modalPrice} addToCart={AddToCheckout} handleClick={closeModal} />}
      <div className={styles.container}>
          <div className={styles.menu}>
            {OrderSection('Sushi Bar', 'Sushi and Sashimi', openModal)}
            {OrderSection('Sushi Bar', 'Classic Rolls', openModal)}
            {OrderSection('Sushi Bar', 'Baked Rolls', openModal)}
            {OrderSection('Sushi Bar', 'Tempura Rolls', openModal)}
            {OrderSection('Sushi Bar', 'Fresh Rolls', openModal)}
            {OrderSection('Sushi Bar', 'Specialty Rolls', openModal)}
            {OrderSection('Sushi Bar', 'Sushi Bar Special', openModal)}

            {OrderSection('Kitchen', 'Appetizers', openModal)}
            {OrderSection('Kitchen', 'Salads', openModal)}
            {OrderSection('Kitchen', 'Toro Specialties', openModal)}
            {OrderSection('Kitchen', 'Entrees', openModal)}
            {OrderSection('Kitchen', 'Tempura', openModal)}
            {OrderSection('Kitchen', 'Rice', openModal)}
            {OrderSection('Kitchen', 'Noodles', openModal)}
            {OrderSection('Kitchen', 'Soup', openModal)}
            {OrderSection('Kitchen', 'Dessert', openModal)}
          </div>
          <div className={styles.placeholder}></div>
          <CheckoutBar items={items}/>
      </div>



    </>
  )
} 
