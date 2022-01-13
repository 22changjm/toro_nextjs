import { getDatabase, ref, onValue} from "firebase/database";
import firebaseInit from '../firebase/initFirebase'
import orderEntry from "./OrderEntry";
import {useState, useEffect, forwardRef} from "react"
import styles from '../styles/OrderEntry.module.css'

// eslint-disable-next-line react/display-name
const OrderSection = forwardRef((props, pref) => {
    const [entries, SetEntries] = useState([]);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2
      })

    const fetchEntries = async (onClick) => {
        const app = firebaseInit();
        const db = getDatabase(app);
        const appetizers = ref(db,`/Menu/${props.type}/${props.category}`);

        const promise = new Promise((resolve, reject) => {
            onValue(appetizers, (snapshot) => {
                const data = snapshot.val();
                resolve(data);
            })
        })
        const res = await promise.then((data)=> {
            const menuEntries = Object.entries(data);
            const list = []
            for (const i = 0; i+1 < menuEntries.length - (menuEntries.length % 2); i+=2) {
                list.push(
                    <div key={`r${menuEntries[i][0]} ${menuEntries[i+1][0]}`}className={styles.row}>
                        {orderEntry(menuEntries[i][0], menuEntries[i][1]['price'], menuEntries[i][1]['description'], onClick)}
                        {orderEntry(menuEntries[i+1][0], menuEntries[i+1][1]['price'], menuEntries[i+1][1]['description'], onClick)}
                    </div>
                )
            }
            if (menuEntries.length % 2 == 1) {
                list.push(
                    <div key={`r${menuEntries[i][0]}`}className={styles.row}>
                        {orderEntry(menuEntries[menuEntries.length - 1][0], menuEntries[menuEntries.length -1][1]['price'], menuEntries[menuEntries.length - 1][1]['description'], onClick)}
                    </div>
                )
            }
            return list
        
        
        });

        SetEntries(res);
    }


    useEffect(() => {
        fetchEntries(props.handleClick);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div ref={pref} className={styles.title}>{props.category}</div>
                {entries}
            </div>
        </>
    )
});


export default OrderSection



