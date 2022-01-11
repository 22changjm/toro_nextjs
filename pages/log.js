import {useRouter} from 'next/router';
import Navigbar from '../components/Navigbar';
import Footer from '../components/Footer'
import styles from '../styles/Success.module.css'
import firebaseInit from '../firebase/initFirebase'
import { getDatabase, ref, onValue, set} from "firebase/database";
import {useState, useEffect} from 'react';
import ReceiptItem from '../components/ReceiptItem';


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
        <Navigbar/>
        <div className={styles.container}>

          {  Object.entries(order).map((value,index)=> {
              return (
                <div key={index} className={styles.receiptContainer}>
                    <div className={styles.receiptTitle}> Order Details:</div>
                    <div className={styles.name}> Name: {value[1][1]['name']}</div>
                    <div className={styles.name}> Time: {value[1][1]['timestamp']}</div>
                    {Object.entries(value[1][1]).filter(value=>value[0] !== 'name' && value[0] !== 'timestamp').map((value, index)=> {
                        return <ReceiptItem key={index} name={value[0]} count={value[1]['quantity']} price={value[1]['price']} desc={value[1]['note']}/>
                    })}
                </div>
              )
            }).reverse()}

            
           
        </div>
        
        <Footer />
      </>
    )
  }
