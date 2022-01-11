import {useState, useEffect} from 'react';
import OrderNavBar from '../components/OrderNavBar'
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';
import Modal from "../components/Modal";
import OrderSide from '../components/OrderSide';
import getStripe from '../components/get-stripe';
import axios from 'axios';
import MobileCheckout from '../components/MobileCheckout';



export default function Order() {


    const [items, setItems] = useState([]);
    const [currItem, setCurrItem] = useState({})
    const [lookup, setLookup] = useState({});
    const [index, setIndex] = useState(0);

    const [openStatus, setOpenStatus] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [modalPrice, setModalPrice] = useState(0);

    const [mobileStatus, setMobileStatus] = useState(false);

    const toggleMobile = () => {
        setMobileStatus((prev) => !prev);
    }

    const redirectToCheckout = async () => {
        const {
            data: {id},
        } = await axios.post('/api/checkout_sessions', {
            items: Object.entries(items.slice(1)).map(([_, {name, count}]) => ({
                price: "price_1KCWPpAMCx4NZbAhcHXINv6C",
                quantity: 1,
            })),
        });

        const stripe = await getStripe();
        await stripe.redirectToCheckout({sessionId: id});
        

    };
    

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


    const AddToCheckout = async (id, price, quant) => {
        setCurrItem({
            name: id,
            price: price * quant,
            count: quant
        });
        setOpenStatus(!openStatus)
  

    }

    const changeQuant = (sign, name) => {
        const clone = items.slice();
        if (sign === "+") {
            for (const item in clone) {
                if (clone[item] !== null && clone[item]['name'] === name) {
                    const pricePerItem = clone[item]['price'] / clone[item]['count'];
                    clone[item]['count'] += 1;
                    clone[item]['price'] += pricePerItem;
                    setItems(clone);
                }
            }
        } else {
            for (const item in clone) {
                if (clone[item] !== null && clone[item]['name'] === name) {
                    if (clone[item]['count'] === 1) {
                        clone[item] = null;
                        const cloneLookup = Object.assign({}, lookup)
                        delete cloneLookup[name];
                        setLookup(cloneLookup)
                        setItems(clone)
                    } else {
                        const pricePerItem = clone[item]['price'] / clone[item]['count'];
                        clone[item]['count'] -= 1;
                        clone[item]['price'] -= pricePerItem;
                        setItems(clone);
                    }
                }
            }
        }
    }

  return (
    <>
      <OrderNavBar toggle={toggleMobile} />
      {mobileStatus && <MobileCheckout checkout={redirectToCheckout} changeQuant={changeQuant} items={items} />}
      {openStatus && <Modal title={modalTitle} description={modalDescription} price={modalPrice} addToCart={AddToCheckout} handleClick={closeModal} />}
      <div className={styles.container}>
          <div className={styles.leftcontainer}>
              {OrderSide(openModal)}
          </div>
          
          <CheckoutBar checkout={redirectToCheckout} changeQuant={changeQuant} items={items}/>
      </div>



    </>
  )
} 
