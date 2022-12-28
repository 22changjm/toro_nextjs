import {useRouter} from 'next/router';
import Navigbar from '../components/Navigbar';
import Footer from '../components/Footer'
import styles from '../styles/Success.module.css'
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue, set} from "firebase/database";
import {useState, useEffect} from 'react';
import ReceiptItem from '../components/ReceiptItem';
import Head from 'next/head';


export default function Success() {

    const router = useRouter();

    const [order, setOrder] = useState(null);

    useEffect(()=> {
        const session_id = router.asPath.slice(20);
        const app = firebaseInit();
        const db = getDatabase(app);
        const completeRef = ref(db, 'complete/' + session_id);
        onValue(completeRef, (snapshot)=> {
            setOrder(snapshot.val())
            console.log(snapshot.val())
        })
    },[])

 



    
    

  

    return (
      <>
      <Head>
        <title>Toro Fusion Grill</title>
        <meta name="description" content="Toro Fusion Grill located at 1818 L Street Bakersfield, CA 93301" />
        <link rel="icon" href="/assets/toro_icon.png" /> 
      </Head>
        <Navigbar/>
        <div className={styles.container}>
            <div className={styles.title}> Thank you for your Order! </div>
            <div className={styles.body}> A receipt was sent to your email.</div>
            <div className={styles.body}> Your order is being made and will be ready for pickup shortly!</div>
            <div className={styles.receipt}>
                <div className={styles.receiptTitle}> Order Details:</div>
                {order ? order['name'] && <div className={styles.name}> Name: { order ? order['name']: null  }</div>: null}
                {order ? order['phoneNumber'] && <div className={styles.name}> Phone Number: { order ? order['phoneNumber']: null  }</div>: null}
                {order? order['tableNumber'] && <div className={styles.name}> Table Number: {order ? order['tableNumber']: null}</div>: null}

                <div className={styles.itemContainer}>
                {order ? Object.entries(order).filter(entry=>entry[0] !== 'name' && entry[0] !== 'phoneNumber' && entry[0] !== 'timestamp' && entry[0] !== 'secs' && entry[0] !== 'tableNumber').map((value, index)=> {
                                    

                                    return <ReceiptItem key={index} name={value[0]} count={value[1]['quantity']} price={value[1]['price']} desc={value[1]['note']} />
                                }): null}
                </div>
                
            </div>
        </div>
        
        <Footer />
      </>
    )
  }
