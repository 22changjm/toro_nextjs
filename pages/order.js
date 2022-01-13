import {useState, useEffect, createRef} from 'react';
import OrderNavBar from '../components/OrderNavBar'
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';
import Modal from "../components/Modal";
import getStripe from '../components/get-stripe';
import axios from 'axios';
import MobileCheckout from '../components/MobileCheckout';
import firebaseInit from '../firebase/initFirebase';
import { getDatabase, ref, onValue, set} from "firebase/database";
import Head from 'next/head';
import Footer from '../components/Footer';
import OrderSection from '../components/OrderSection';





export default function Order() {
    let priceLookup = null;
    const app = firebaseInit();
    const db = getDatabase(app);
    const stripeLookup = ref(db,`/Stripe`);
    onValue(stripeLookup, (snapshot) => {
        priceLookup = snapshot.val();
    })

    const [menuState, setMenuState] = useState(0);
    const [numItems, setNumItems] = useState(0);
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
        if (openStatus) {
            console.log('working')
            return;
        }
        setMobileStatus((prev) => !prev);
    }

    const redirectToCheckout = async (name) => {
        const {
            data: {id},
        } = await axios.post('/api/checkout_sessions', {
            items: Object.entries(items.slice(1)).filter(arr => arr[1]).map(([_, {name, count, desc}]) => ({
                price: priceLookup[name] /*"price_1KCWPpAMCx4NZbAhcHXINv6C" */,
                quantity: count,
            
            })),
        });
        const prods = Object.entries(items.slice(1)).filter(arr=> arr[1])
        const dict = {};

        dict['name'] = name;
        dict['secs'] = Date.now();
        dict['timestamp'] = new Date().toLocaleDateString('en-US');
        dict['timestamp'] += " ";
        dict['timestamp'] += new Date().toLocaleTimeString('us-PT')


        for (const entry in prods) {
            dict[prods[entry][1]['name']] = {
                quantity: prods[entry][1]['count'],
                note: prods[entry][1]['desc'],
                price: prods[entry][1]['price'],
            }
        }
        
        set(ref(db, 'incomplete/' + id), dict) 
        
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

    useEffect(()=> {
        const entries = items.slice(1);
        const count = 0
        for (const entry in entries) {
            if (entries[entry] === null) {
                continue;
            }
            count += entries[entry]['count']
        }
        setNumItems(count);
    }, [items])

    useEffect(()=> {}, [openStatus])
    
    useEffect(()=>{
        console.log(items[1])
        if (Object.keys(lookup).includes(currItem['name'])) {
            const tmp = items.slice();
            tmp[lookup[currItem['name']]]['count'] = tmp[lookup[currItem['name']]]['count'] + currItem['count'];
            tmp[lookup[currItem['name']]]['price'] = tmp[lookup[currItem['name']]]['count'] * currItem['price'];
            tmp[lookup[currItem['name']]]['desc'] = currItem['desc'];
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


    const AddToCheckout = async (id, price, quant, description) => {
        setCurrItem({
            name: id,
            price: price * quant,
            count: quant,
            desc: description,
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

    const appetizerRef = createRef();
    const saladRef = createRef();
    const torospecialtiesRef = createRef();
    const entreesRef = createRef();
    const tempuraRef = createRef();
    const riceRef = createRef();
    const noodleRef = createRef();
    const soupRef = createRef();
    const dessertRef = createRef();
    const sushiandsashimiRef = createRef();
    const classicRef = createRef();
    const bakedRef= createRef();
    const tempurarollRef = createRef();
    const freshRef = createRef();
    const specialtiesRef = createRef();
    const sushibarspecialRef = createRef();

    const testRef = createRef();


    const handleScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth",
                                            block: "center", });
        }

      
    }

    const scrollBar = (dir) => {
        if (dir === 'left') {
            testRef.current.scrollBy({
                left: -200, 
                behavior: "smooth",
            })
        } else if (dir === 'right') {
            testRef.current.scrollBy({
                left: 200, 
                behavior: "smooth",
            })
        }
    }

  return (
    <>
    <Head>
        <title>Toro Fusion Grill</title>
        <meta name="description" content="Toro Fusion Grill located at 1818 L Street Bakersfield, CA 93301" />
        <link rel="icon" href="/assets/toro_icon.png" /> 
      </Head>


      <OrderNavBar numItems={numItems} toggle={toggleMobile} />
      {mobileStatus && <MobileCheckout checkout={redirectToCheckout} changeQuant={changeQuant} items={items} />}
      {openStatus && <Modal title={modalTitle} description={modalDescription} price={modalPrice} addToCart={AddToCheckout} handleClick={closeModal} />}
      <div className={styles.container}>
            <div className={styles.leftcontainer}>
                        <div className={styles.bigContainer}> 
                            <button onClick={()=> {scrollBar('left')}}className={styles.button} >&lt;</button>
                            <div ref={testRef} className={styles.scrollContainer}>
                                <div id={styles.marginleft} onClick={()=> {handleScroll(appetizerRef)}} className={styles.scrollItem}>
                                    Appetizers
                                </div>
                                <div onClick={()=> {handleScroll(saladRef)}} className={styles.scrollItem}>
                                Salads
                                </div>
                                <div onClick={()=> {handleScroll(torospecialtiesRef)}} className={styles.scrollItem}>
                                Toro Specialties
                                </div>
                                <div onClick={()=> {handleScroll(entreesRef)}} className={styles.scrollItem}>
                                Entrees
                                </div>
                                <div onClick={()=> {handleScroll(tempuraRef)}} className={styles.scrollItem}>
                                Tempura
                                </div>
                                <div onClick={()=> {handleScroll(riceRef)}} className={styles.scrollItem}>
                                Rice
                                </div>
                                <div onClick={()=> {handleScroll(noodleRef)}} className={styles.scrollItem}>
                                Noodles
                                </div>
                                <div onClick={()=> {handleScroll(soupRef)}} className={styles.scrollItem}>
                                Soup
                                </div>
                                <div onClick={()=> {handleScroll(dessertRef)}} className={styles.scrollItem}>
                                Dessert
                                </div>
                                <div onClick={()=> {handleScroll(sushiandsashimiRef)}} className={styles.scrollItem}>
                                Sushi and Sashimi
                                </div>
                                <div onClick={()=> {handleScroll(classicRef)}} className={styles.scrollItem}>
                                Classic Rolls
                                </div>
                                <div onClick={()=> {handleScroll(bakedRef)}} className={styles.scrollItem}>
                                Baked Rolls
                                </div>
                                <div onClick={()=> {handleScroll(tempurarollRef)}} className={styles.scrollItem}>
                                Tempura Rolls
                                </div>
                                <div onClick={()=> {handleScroll(freshRef)}} className={styles.scrollItem}>
                                Fresh Rolls
                                </div>
                                <div onClick={()=> {handleScroll(specialtiesRef)}} className={styles.scrollItem}>
                                Specialty Rolls
                                </div>
                                <div onClick={()=> {handleScroll(sushibarspecialRef)}} className={styles.scrollItem}>
                                Sushi Bar Special
                                </div> 
                            </div>
                            <button onClick={()=>{scrollBar('right')}} className={styles.button} >&gt;</button>
                        </div>
                            
                    <div className={styles.menu}>
                            <OrderSection ref={appetizerRef} type="Kitchen" category="Appetizers" handleClick={openModal} />
                            <OrderSection ref={saladRef} type="Kitchen" category="Salads" handleClick={openModal} />
                            <OrderSection ref={torospecialtiesRef} type="Kitchen" category="Toro Specialties" handleClick={openModal} />
                            <OrderSection ref={entreesRef} type="Kitchen" category="Entrees" handleClick={openModal} />
                            <OrderSection ref={tempuraRef} type="Kitchen" category="Tempura" handleClick={openModal} />
                            <OrderSection ref={riceRef} type="Kitchen" category="Rice" handleClick={openModal} />
                            <OrderSection ref={noodleRef} type="Kitchen" category="Noodles" handleClick={openModal} />
                            <OrderSection ref={soupRef} type="Kitchen" category="Soup" handleClick={openModal} />
                            <OrderSection ref={dessertRef} type="Kitchen" category="Dessert" handleClick={openModal} />
                            <OrderSection ref={sushiandsashimiRef} type="Sushi Bar" category="Sushi and Sashimi" handleClick={openModal} />
                            <OrderSection ref={classicRef}type="Sushi Bar" category="Classic Rolls" handleClick={openModal} />
                            <OrderSection ref={bakedRef} type="Sushi Bar" category="Baked Rolls" handleClick={openModal} />
                            <OrderSection ref={tempurarollRef} type="Sushi Bar" category="Tempura Rolls" handleClick={openModal} />
                            <OrderSection ref={freshRef} type="Sushi Bar" category="Fresh Rolls" handleClick={openModal} />
                            <OrderSection ref={specialtiesRef} type="Sushi Bar" category="Specialty Rolls" handleClick={openModal} />
                            <OrderSection ref={sushibarspecialRef} type="Sushi Bar" category="Sushi Bar Special" handleClick={openModal} />
                    </div>
            </div>
            <CheckoutBar checkout={redirectToCheckout} changeQuant={changeQuant} items={items}/>
        </div>
      <Footer />



    </>
  )
} 
