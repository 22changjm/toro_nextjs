import {useState, useEffect} from 'react';
import Navigbar from '../components/Navigbar'
import OrderSection from '../components/OrderSection';
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue} from "firebase/database";
import CheckOutItem from "../components/CheckOutItem"
import Modal from "../components/Modal";
import KitchenOrderSection from '../components/KitchenOrderSection';
import SushiBarOrderSection from '../components/SushiBarOrderSection';
import OrderSide from '../components/OrderSide';


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
          <div className={styles.leftcontainer}>
              {OrderSide(openModal)}
          </div>
          
          <CheckoutBar items={items}/>
      </div>



    </>
  )
} 
