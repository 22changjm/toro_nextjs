import {useState, useEffect, useRef} from 'react';
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

    const appetizerRef = useRef();
    const saladRef = useRef();
    const torospecialtiesRef = useRef();
    const entreesRef = useRef();
    const tempuraRef = useRef();
    const riceRef = useRef();
    const noodleRef = useRef();
    const soupRef = useRef();
    const dessertRef = useRef();
    const sushiandsashimiRef = useRef();
    const classicRef = useRef();
    const bakedRef= useRef();
    const tempurarollRef = useRef();
    const freshRef = useRef();
    const specialtiesRef = useRef();
    const sushibarspecialRef = useRef();

    const testRef = useRef();

    const appetizerScrollRef = useRef();
    const saladScrollRef = useRef();
    const torospecialtiesScrollRef = useRef();
    const entreesScrollRef = useRef();
    const tempuraScrollRef = useRef();
    const riceScrollRef = useRef();
    const noodlesScrollRef = useRef();
    const soupScrollRef = useRef();
    const dessertScrollRef = useRef();
    const sushiandsashimiScrollRef = useRef();
    const classicScrollRef = useRef();
    const bakedScrollRef = useRef();
    const tempurarollScrollRef = useRef();
    const freshScrollRef = useRef();
    const specialtyrollScrollRef = useRef();
    const sushibarspecialScrollRef = useRef();



    

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

    const lastScrollTop = 0;
    const lastChanged = null;

    const handleScroll = (ref) => {
        if (ref && ref.current) {
            ref.current.scrollIntoView({ behavior: "smooth",
                                            block: "center", });
            const st = window.pageYOffset || document.documentElement.scrollTop;
                console.log(st);
            if (ref.current.innerText === 'Appetizers') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                appetizerScrollRef.current.style.color = '#f18701'
                lastChanged = appetizerScrollRef;
            } else if (ref.current.innerText === 'Salads') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                saladScrollRef.current.style.color = '#f18701'
                lastChanged = saladScrollRef;
            } else if (ref.current.innerText === 'Toro Specialties') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                torospecialtiesScrollRef.current.style.color = '#f18701'
                lastChanged = torospecialtiesScrollRef;
            } else if (ref.current.innerText === 'Entrees') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                entreesScrollRef.current.style.color = '#f18701'
                lastChanged = entreesScrollRef;
            } else if (ref.current.innerText === 'Tempura') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                tempuraScrollRef.current.style.color = '#f18701'
                lastChanged = tempuraScrollRef;
            } else if (ref.current.innerText === 'Rice') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                riceScrollRef.current.style.color = '#f18701'
                lastChanged = riceScrollRef;
            } else if (ref.current.innerText === 'Noodles') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                noodlesScrollRef.current.style.color = '#f18701'
                lastChanged = noodlesScrollRef;
            } else if (ref.current.innerText === 'Soup') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                soupScrollRef.current.style.color = '#f18701'
                lastChanged = soupScrollRef;
            } else if (ref.current.innerText === 'Dessert') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                dessertScrollRef.current.style.color = '#f18701'
                lastChanged = dessertScrollRef;
            } else if (ref.current.innerText === 'Sushi and Sashimi') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                sushiandsashimiScrollRef.current.style.color = '#f18701'
                lastChanged = sushiandsashimiScrollRef;
            } else if (ref.current.innerText === 'Classic Rolls') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                classicScrollRef.current.style.color = '#f18701'
                lastChanged = classicScrollRef;
            } else if (ref.current.innerText === 'Baked Rolls') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                bakedScrollRef.current.style.color = '#f18701'
                lastChanged = bakedScrollRef;
            } else if (ref.current.innerText === 'Tempura Rolls') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                tempurarollScrollRef.current.style.color = '#f18701'
                lastChanged = tempurarollScrollRef;
            } else if (ref.current.innerText === 'Fresh Rolls') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                freshScrollRef.current.style.color = '#f18701'
                lastChanged = freshScrollRef;
            } else if (ref.current.innerText === 'Specialty Rolls') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                specialtyrollScrollRef.current.style.color = '#f18701'
                lastChanged = specialtyrollScrollRef;
            } else if (ref.current.innerText === 'Sushi Bar Special') {
                if (lastChanged) {
                    lastChanged.current.style.color = 'black';
                }
                sushibarspecialScrollRef.current.style.color = '#f18701'
                lastChanged = sushibarspecialScrollRef;
            }
            
        }

      
    }

    useEffect(()=>{
        window.addEventListener('wheel', ()=>{
            if (window.innerWidth >= 1324) {
  
            if (st > lastScrollTop) {
                if (st >= 0 && st < 438) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    appetizerScrollRef.current.style.color = "#f18701";
                    lastChanged = appetizerScrollRef;
                } if (st >= 438 && st < 1078 && (lastScrollTop < 438 || lastScrollTop > 1078)) {
                        testRef.current.scrollBy({
                            left: 80, 
                            behavior: "smooth",
                        })
                        if (lastChanged) {
                            lastChanged.current.style.color = "black";
                        }
                        saladScrollRef.current.style.color = "#f18701";
                        lastChanged = saladScrollRef;
                } if (st >= 1078 && st < 1574 && (lastScrollTop < 1078 || lastScrollTop > 1574)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    torospecialtiesScrollRef.current.style.color = "#f18701";
                    lastChanged = torospecialtiesScrollRef;
                } if (st >= 1574 && st < 2215 && (lastScrollTop < 1574 || lastScrollTop > 2215)) {
                    testRef.current.scrollBy({
                        left: 110, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    entreesScrollRef.current.style.color = "#f18701";
                    lastChanged = entreesScrollRef;
                } if (st >= 2215 && st < 2565 && (lastScrollTop < 2215 || lastScrollTop > 2565)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempuraScrollRef.current.style.color = "#f18701";
                    lastChanged = tempuraScrollRef;
                }  if (st >= 2565 && st < 3061 && (lastScrollTop < 2565 || lastScrollTop > 3061)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    riceScrollRef.current.style.color = "#f18701";
                    lastChanged = riceScrollRef;
                }  if (st >= 3061 && st < 3411 && (lastScrollTop < 3061 || lastScrollTop > 3411)) {
                    testRef.current.scrollBy({
                        left: 50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    noodlesScrollRef.current.style.color = "#f18701";
                    lastChanged = noodlesScrollRef;
                }  if (st >= 3411 && st < 3761 && (lastScrollTop < 3411 || lastScrollTop > 3761)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    soupScrollRef.current.style.color = "#f18701";
                    lastChanged = soupScrollRef;
                }  if (st >= 3761 && st < 4112 && (lastScrollTop < 3761 || lastScrollTop > 4112)) {
                    testRef.current.scrollBy({
                        left: 50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    dessertScrollRef.current.style.color = "#f18701";
                    lastChanged = dessertScrollRef;
                }  if (st >= 4112 && st < 5624 && (lastScrollTop < 4112 || lastScrollTop > 5624)) {
                    testRef.current.scrollBy({
                        left: 75, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushiandsashimiScrollRef.current.style.color = "#f18701";
                    lastChanged = sushiandsashimiScrollRef;
                }  if (st >= 5624 && st < 6845 && (lastScrollTop < 5624 || lastScrollTop > 6845)) {
                    testRef.current.scrollBy({
                        left: 125, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    classicScrollRef.current.style.color = "#f18701";
                    lastChanged = classicScrollRef;
                }  if (st >= 6845 && st < 7486 && (lastScrollTop < 6845 || lastScrollTop > 7486)) {
                    testRef.current.scrollBy({
                        left: 95, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    bakedScrollRef.current.style.color = "#f18701";
                    lastChanged = bakedScrollRef;
                }   if (st >= 7486 && st < 8417 && (lastScrollTop < 7486 || lastScrollTop > 8417)) {
                    testRef.current.scrollBy({
                        left: 90, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempurarollScrollRef.current.style.color = "#f18701";
                    lastChanged = tempurarollScrollRef;
                }  if (st >= 8417 && st < 9638 && (lastScrollTop < 8417 || lastScrollTop > 9638)) {
                    testRef.current.scrollBy({
                        left: 100, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    freshScrollRef.current.style.color = "#f18701";
                    lastChanged = freshScrollRef;
                }  if (st >= 9638 && st < 10860 && (lastScrollTop < 9638 || lastScrollTop > 10860)) {
                    testRef.current.scrollBy({
                        left: 120, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    specialtyrollScrollRef.current.style.color = "#f18701";
                    lastChanged = specialtyrollScrollRef;
                }  if (st >= 10860) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushibarspecialScrollRef.current.style.color = "#f18701";
                    lastChanged = sushibarspecialScrollRef;
                }
                
            } else {
                if (st >= 0 && st < 438) {
                    testRef.current.scrollBy({
                        left: -80, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    appetizerScrollRef.current.style.color = "#f18701";
                    lastChanged = appetizerScrollRef;
                    
                } else if (st >= 438 && st < 1078 && (lastScrollTop < 438 || lastScrollTop > 1078)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    saladScrollRef.current.style.color = "#f18701";
                    lastChanged = saladScrollRef;
                } else if (st >= 1078 && st < 1574 && (lastScrollTop < 1078 || lastScrollTop > 1574)) {
                    testRef.current.scrollBy({
                        left: -110, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    torospecialtiesScrollRef.current.style.color = "#f18701";
                    lastChanged = torospecialtiesScrollRef;
                }else if (st >= 1574 && st < 2215 && (lastScrollTop < 1574 || lastScrollTop > 2215)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    entreesScrollRef.current.style.color = "#f18701";
                    lastChanged = entreesScrollRef;
                }else if (st >= 2215 && st < 2565 && (lastScrollTop < 2215 || lastScrollTop > 2565)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempuraScrollRef.current.style.color = "#f18701";
                    lastChanged = tempuraScrollRef;
                } else if (st >= 2565 && st < 3061 && (lastScrollTop < 2565 || lastScrollTop > 3061)) {
                    testRef.current.scrollBy({
                        left: -50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    riceScrollRef.current.style.color = "#f18701";
                    lastChanged = riceScrollRef;
                } else if (st >= 3061 && st < 3411 && (lastScrollTop < 3061 || lastScrollTop > 3411)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    noodlesScrollRef.current.style.color = "#f18701";
                    lastChanged = noodlesScrollRef;
                } else if (st >= 3411 && st < 3761 && (lastScrollTop < 3411 || lastScrollTop > 3761)) {
                    testRef.current.scrollBy({
                        left: -50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    soupScrollRef.current.style.color = "#f18701";
                    lastChanged = soupScrollRef;
                } else if (st >= 3761 && st < 4112 && (lastScrollTop < 3761 || lastScrollTop > 4112)) {
                    testRef.current.scrollBy({
                        left: -75, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    dessertScrollRef.current.style.color = "#f18701";
                    lastChanged = dessertScrollRef;
                } else if (st >= 4112 && st < 5624 && (lastScrollTop < 4112 || lastScrollTop > 5624)) {
                    testRef.current.scrollBy({
                        left: -125, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushiandsashimiScrollRef.current.style.color = "#f18701";
                    lastChanged = sushiandsashimiScrollRef;
                } else if (st >= 5624 && st < 6845 && (lastScrollTop < 5624 || lastScrollTop > 6845)) {
                    testRef.current.scrollBy({
                        left: -95, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    classicScrollRef.current.style.color = "#f18701";
                    lastChanged = classicScrollRef;
                } else if (st >= 6845 && st < 7486 && (lastScrollTop < 6845 || lastScrollTop > 7486)) {
                    testRef.current.scrollBy({
                        left: -90, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    bakedScrollRef.current.style.color = "#f18701";
                    lastChanged = bakedScrollRef;
                }  else if (st >= 7486 && st < 8417 && (lastScrollTop < 7486 || lastScrollTop > 8417)) {
                    testRef.current.scrollBy({
                        left: -100, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempurarollScrollRef.current.style.color = "#f18701";
                    lastChanged = tempurarollScrollRef;
                } else if (st >= 8417 && st < 9638 && (lastScrollTop < 8417 || lastScrollTop > 9638)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    freshScrollRef.current.style.color = "#f18701";
                    lastChanged = freshScrollRef;
                } else if (st >= 9638 && st < 10860 && (lastScrollTop < 9638 || lastScrollTop > 10860)) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    specialtyrollScrollRef.current.style.color = "#f18701";
                    lastChanged = specialtyrollScrollRef;
                } else if (st >= 10860) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushibarspecialScrollRef.current.style.color = "#f18701";
                    lastChanged = sushibarspecialScrollRef;
                }

            }
            lastScrollTop = st <= 0? 0: st;



            } else {
                const st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                if (st >= 0 && st < 984) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    appetizerScrollRef.current.style.color = "#f18701";
                    lastChanged = appetizerScrollRef;
                } else if (st >= 984 && st < 1950 && (lastScrollTop < 984 || lastScrollTop > 1950)) {
                        testRef.current.scrollBy({
                            left: 80, 
                            behavior: "smooth",
                        })
                        if (lastChanged) {
                            lastChanged.current.style.color = "black";
                        }
                        saladScrollRef.current.style.color = "#f18701";
                        lastChanged = saladScrollRef;
                } else if (st >= 1950 && st < 2577 && (lastScrollTop < 1950 || lastScrollTop > 2577)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    torospecialtiesScrollRef.current.style.color = "#f18701";
                    lastChanged = torospecialtiesScrollRef;
                }else if (st >= 2577 && st < 3429 && (lastScrollTop < 2577 || lastScrollTop > 3429)) {
                    testRef.current.scrollBy({
                        left: 110, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    entreesScrollRef.current.style.color = "#f18701";
                    lastChanged = entreesScrollRef;
                }else if (st >= 3429 && st < 3829 && (lastScrollTop < 3429 || lastScrollTop > 3829)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempuraScrollRef.current.style.color = "#f18701";
                    lastChanged = tempuraScrollRef;
                } else if (st >= 3829 && st < 4455 && (lastScrollTop < 3829 || lastScrollTop > 4455)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    riceScrollRef.current.style.color = "#f18701";
                    lastChanged = riceScrollRef;
                } else if (st >= 4455 && st < 4968 && (lastScrollTop < 4455 || lastScrollTop > 4968)) {
                    testRef.current.scrollBy({
                        left: 50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    noodlesScrollRef.current.style.color = "#f18701";
                    lastChanged = noodlesScrollRef;
                } else if (st >= 4968 && st < 5368 && (lastScrollTop < 4968 || lastScrollTop > 5368)) {
                    testRef.current.scrollBy({
                        left: 70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    soupScrollRef.current.style.color = "#f18701";
                    lastChanged = soupScrollRef;
                } else if (st >= 5368 && st < 5881 && (lastScrollTop < 5368 || lastScrollTop > 5881)) {
                    testRef.current.scrollBy({
                        left: 50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    dessertScrollRef.current.style.color = "#f18701";
                    lastChanged = dessertScrollRef;
                } else if (st >= 5881 && st < 8093 && (lastScrollTop < 5881 || lastScrollTop > 8093)) {
                    testRef.current.scrollBy({
                        left: 75, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushiandsashimiScrollRef.current.style.color = "#f18701";
                    lastChanged = sushiandsashimiScrollRef;
                } else if (st >= 8093 && st < 9965 && (lastScrollTop < 8093 || lastScrollTop > 9965)) {
                    testRef.current.scrollBy({
                        left: 125, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    classicScrollRef.current.style.color = "#f18701";
                    lastChanged = classicScrollRef;
                } else if (st >= 9965 && st < 10818 && (lastScrollTop < 9965 || lastScrollTop > 10818)) {
                    testRef.current.scrollBy({
                        left: 95, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    bakedScrollRef.current.style.color = "#f18701";
                    lastChanged = bakedScrollRef;
                }  else if (st >= 10818 && st < 12123 && (lastScrollTop < 10818 || lastScrollTop > 12123)) {
                    testRef.current.scrollBy({
                        left: 90, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempurarollScrollRef.current.style.color = "#f18701";
                    lastChanged = tempurarollScrollRef;
                } else if (st >= 12123 && st < 13882 && (lastScrollTop < 12123 || lastScrollTop > 13882)) {
                    testRef.current.scrollBy({
                        left: 100, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    freshScrollRef.current.style.color = "#f18701";
                    lastChanged = freshScrollRef;
                } else if (st >= 13882 && st < 15641 && (lastScrollTop < 13882 || lastScrollTop > 15641)) {
                    testRef.current.scrollBy({
                        left: 120, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    specialtyrollScrollRef.current.style.color = "#f18701";
                    lastChanged = specialtyrollScrollRef;
                } else if (st >= 15641) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushibarspecialScrollRef.current.style.color = "#f18701";
                    lastChanged = sushibarspecialScrollRef;
                }
                
            } else {
                if (st >= 0 && st < 984) {
                    testRef.current.scrollBy({
                        left: -80, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    appetizerScrollRef.current.style.color = "#f18701";
                    lastChanged = appetizerScrollRef;
                    
                } else if (st >= 984 && st < 1950 && (lastScrollTop < 984 || lastScrollTop > 1950)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    saladScrollRef.current.style.color = "#f18701";
                    lastChanged = saladScrollRef;
                } else if (st >= 1950 && st < 2577 && (lastScrollTop < 1950 || lastScrollTop > 2577)) {
                    testRef.current.scrollBy({
                        left: -110, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    torospecialtiesScrollRef.current.style.color = "#f18701";
                    lastChanged = torospecialtiesScrollRef;
                }else if (st >= 2577 && st < 3429 && (lastScrollTop < 2577 || lastScrollTop > 3429)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    entreesScrollRef.current.style.color = "#f18701";
                    lastChanged = entreesScrollRef;
                }else if (st >= 3429 && st < 3829 && (lastScrollTop < 3429 || lastScrollTop > 3829)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempuraScrollRef.current.style.color = "#f18701";
                    lastChanged = tempuraScrollRef;
                } else if (st >= 3829 && st < 4455 && (lastScrollTop < 3829 || lastScrollTop > 4455)) {
                    testRef.current.scrollBy({
                        left: -50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    riceScrollRef.current.style.color = "#f18701";
                    lastChanged = riceScrollRef;
                } else if (st >= 4455 && st < 4968 && (lastScrollTop < 4455 || lastScrollTop > 4968)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    noodlesScrollRef.current.style.color = "#f18701";
                    lastChanged = noodlesScrollRef;
                } else if (st >= 4968 && st < 5368 && (lastScrollTop < 4968 || lastScrollTop > 5368)) {
                    testRef.current.scrollBy({
                        left: -50, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    soupScrollRef.current.style.color = "#f18701";
                    lastChanged = soupScrollRef;
                } else if (st >= 5368 && st < 5881 && (lastScrollTop < 5368 || lastScrollTop > 5881)) {
                    testRef.current.scrollBy({
                        left: -75, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    dessertScrollRef.current.style.color = "#f18701";
                    lastChanged = dessertScrollRef;
                } else if (st >= 5881 && st < 8093 && (lastScrollTop < 5881 || lastScrollTop > 8093)) {
                    testRef.current.scrollBy({
                        left: -125, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushiandsashimiScrollRef.current.style.color = "#f18701";
                    lastChanged = sushiandsashimiScrollRef;
                } else if (st >= 8093 && st < 9965 && (lastScrollTop < 8093 || lastScrollTop > 9965)) {
                    testRef.current.scrollBy({
                        left: -95, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    classicScrollRef.current.style.color = "#f18701";
                    lastChanged = classicScrollRef;
                } else if (st >= 9965 && st < 10818 && (lastScrollTop < 9965 || lastScrollTop > 10818)) {
                    testRef.current.scrollBy({
                        left: -90, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    bakedScrollRef.current.style.color = "#f18701";
                    lastChanged = bakedScrollRef;
                }  else if (st >= 10818 && st < 12123 && (lastScrollTop < 10818 || lastScrollTop > 12123)) {
                    testRef.current.scrollBy({
                        left: -100, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    tempurarollScrollRef.current.style.color = "#f18701";
                    lastChanged = tempurarollScrollRef;
                } else if (st >= 12123 && st < 13882 && (lastScrollTop < 12123 || lastScrollTop > 13882)) {
                    testRef.current.scrollBy({
                        left: -70, 
                        behavior: "smooth",
                    })
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    freshScrollRef.current.style.color = "#f18701";
                    lastChanged = freshScrollRef;
                } else if (st >= 13882 && st < 15641 && (lastScrollTop < 13882 || lastScrollTop > 15641)) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    specialtyrollScrollRef.current.style.color = "#f18701";
                    lastChanged = specialtyrollScrollRef;
                } else if (st >= 15641) {
                    if (lastChanged) {
                        lastChanged.current.style.color = "black";
                    }
                    sushibarspecialScrollRef.current.style.color = "#f18701";
                    lastChanged = sushibarspecialScrollRef;
                }

            }
            lastScrollTop = st <= 0? 0: st;
            }
        })
    },[])

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
                                <div ref={appetizerScrollRef}id={styles.marginleft} onClick={()=> {handleScroll(appetizerRef)}} className={styles.scrollItem}>
                                    Appetizers
                                </div>
                                <div ref={saladScrollRef} onClick={()=> {handleScroll(saladRef)}} className={styles.scrollItem}>
                                Salads
                                </div>
                                <div ref={torospecialtiesScrollRef} onClick={()=> {handleScroll(torospecialtiesRef)}} className={styles.scrollItem}>
                                Toro Specialties
                                </div>
                                <div ref={entreesScrollRef} onClick={()=> {handleScroll(entreesRef)}} className={styles.scrollItem}>
                                Entrees
                                </div>
                                <div ref={tempuraScrollRef} onClick={()=> {handleScroll(tempuraRef)}} className={styles.scrollItem}>
                                Tempura
                                </div>
                                <div ref={riceScrollRef} onClick={()=> {handleScroll(riceRef)}} className={styles.scrollItem}>
                                Rice
                                </div>
                                <div ref={noodlesScrollRef}  onClick={()=> {handleScroll(noodleRef)}} className={styles.scrollItem}>
                                Noodles
                                </div>
                                <div ref={soupScrollRef} onClick={()=> {handleScroll(soupRef)}} className={styles.scrollItem}>
                                Soup
                                </div>
                                <div ref={dessertScrollRef} onClick={()=> {handleScroll(dessertRef)}} className={styles.scrollItem}>
                                Dessert
                                </div>
                                <div ref={sushiandsashimiScrollRef} onClick={()=> {handleScroll(sushiandsashimiRef)}} className={styles.scrollItem}>
                                Sushi and Sashimi
                                </div>
                                <div ref={classicScrollRef} onClick={()=> {handleScroll(classicRef)}} className={styles.scrollItem}>
                                Classic Rolls
                                </div>
                                <div ref={bakedScrollRef} onClick={()=> {handleScroll(bakedRef)}} className={styles.scrollItem}>
                                Baked Rolls
                                </div>
                                <div ref={tempurarollScrollRef} onClick={()=> {handleScroll(tempurarollRef)}} className={styles.scrollItem}>
                                Tempura Rolls
                                </div>
                                <div ref={freshScrollRef} onClick={()=> {handleScroll(freshRef)}} className={styles.scrollItem}>
                                Fresh Rolls
                                </div>
                                <div ref={specialtyrollScrollRef} onClick={()=> {handleScroll(specialtiesRef)}} className={styles.scrollItem}>
                                Specialty Rolls
                                </div>
                                <div ref={sushibarspecialScrollRef} onClick={()=> {handleScroll(sushibarspecialRef)}} className={styles.scrollItem}>
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
