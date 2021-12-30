import { getDatabase, ref, onValue} from "firebase/database";
import firebaseInit from '../firebase/initFirebase'
import orderEntry from "./OrderEntry";
import {useState, useEffect} from "react"
import styles from '../styles/OrderEntry.module.css'

const orderSection = (type, category) => {
    const [entries, SetEntries] = useState([]);

    

    const fetchEntries = async () => {
        const app = firebaseInit();
        const db = getDatabase(app);'/Menu/Sushi Bar/Baked Rolls'
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
                        {console.log(menuEntries.length)}
                        {orderEntry(menuEntries[i][0], menuEntries[i][1]['price'], menuEntries[i][1]['description'])}
                        {orderEntry(menuEntries[i+1][0], menuEntries[i+1][1]['price'], menuEntries[i+1][1]['description'])}
                    </div>
                )
            }
            if (menuEntries.length % 2 == 1) {
                list.push(
                    <div className={styles.row}>
                        {console.log(menuEntries.length)}
                        {orderEntry(menuEntries[menuEntries.length - 1][0], menuEntries[menuEntries.length -1][1]['price'], menuEntries[menuEntries.length - 1][1]['description'])}
                    </div>
                )
            }
            return list
        
        
        });

        SetEntries(res);
    }


    useEffect(() => {
        fetchEntries();
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


export default orderSection



