import {useRouter} from 'next/router';
import Navigbar from '../components/Navigbar';
import Footer from '../components/Footer'
import styles from '../styles/Success.module.css'
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue, set} from "firebase/database";
import {useState, useEffect} from 'react';
import ReceiptItem from '../components/ReceiptItem';
import Head from 'next/head';



export default function Log() {

    const [order, setOrder] = useState([]);

    useEffect(()=> {
        const app = firebaseInit();
        const db = getDatabase(app);
        const completeRef = ref(db, 'complete/');
        onValue(completeRef, (snapshot)=> {
            if (!snapshot.val()) {
                return;
            }
            setOrder(Object.entries(snapshot.val()))
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
          {  Object.entries(order).sort((x,y)=> {
            return y[1][1]['secs'] - x[1][1]['secs'] ;
          }).map((value,index)=> {
              return (
                <div key={index} className={styles.receiptContainer}>
                    <div className={styles.receiptTitle}> Order Details:</div>
                    {value[1][1]['name'] && <div className={styles.name}> Name: {value[1][1]['name']}</div>}
                    {value[1][1]['phoneNumber'] && <div className={styles.name}> Phone Number: {value[1][1]['phoneNumber']}</div>}
                    {value[1][1]['tableNumber'] && <div className={styles.name}> Table Number: {value[1][1]['tableNumber']}</div>}
                    <div className={styles.name}> Time: {value[1][1]['timestamp']}</div>
                    {Object.entries(value[1][1]).filter(value=>value[0] !== 'name' && value[0] !== 'phoneNumber' && value[0] !== 'timestamp' && value[0] !== 'secs' && value[0] !== 'tableNumber').map((value, index)=> {
                        return <ReceiptItem key={index} name={value[0]} count={value[1]['quantity']} price={value[1]['price']} desc={value[1]['note']}/>
                    })}
                </div>
              )
            })}

            
           
        </div>
        
        <Footer />
      </>
    )
  }
