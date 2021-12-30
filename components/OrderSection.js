import { getDatabase, ref, onValue} from "firebase/database";
import firebaseInit from '../firebase/initFirebase'
import orderEntry from "./OrderEntry";
import {useState, useEffect} from "react"
import styles from '../styles/OrderEntry.module.css'

const OrderSection = (type, category, onClick) => {
    const [entries, SetEntries] = useState([]);

    

    const fetchEntries = async (onClick) => {
        const app = firebaseInit();
        const db = getDatabase(app);
        const appetizers = ref(db,`/Menu/${type}/${category}`);

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
                    <div className={styles.row}>
                        {orderEntry(menuEntries[i][0], menuEntries[i][1]['price'], menuEntries[i][1]['description'], onClick)}
                        {orderEntry(menuEntries[i+1][0], menuEntries[i+1][1]['price'], menuEntries[i+1][1]['description'], onClick)}
                    </div>
                )
            }
            if (menuEntries.length % 2 == 1) {
                list.push(
                    <div className={styles.row}>
                        {orderEntry(menuEntries[menuEntries.length - 1][0], menuEntries[menuEntries.length -1][1]['price'], menuEntries[menuEntries.length - 1][1]['description'], onClick)}
                    </div>
                )
            }
            return list
        
        
        });

        SetEntries(res);
    }


    useEffect(() => {
        fetchEntries(onClick);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>{category}</div>
                {entries}
            </div>
        </>
    )
}


export default OrderSection



