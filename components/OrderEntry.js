import styles from '../styles/OrderEntry.module.css'

const orderEntry = (name, price, desc) => {
    console.log(name,price,desc)
    if (typeof price === 'object' && price !== null) {
        price = Math.min(...Object.values(price))
    } 
    if (typeof desc === 'object' && desc != null) {
        const inside = <div className={styles.inside}> In: {desc['in']} </div>
        if ('out' in desc) {
            const out = <div className={styles.out}> Out: {desc['out']} </div>

        }
        return (
            <>
                <div className={styles.entry}>
                        <div className={styles.entryname}>
                            {name}
                        </div>
                        <div className={styles.entrydesc}>
                            {inside}
                            {out}
                        </div>
                        <div className={styles.price}>
                            {price}
                        </div>
                    </div>
            </>
        )
    }
    return (
        <>
            <div className={styles.entry}>
                    <div className={styles.entryname}>
                        {name}
                    </div>
                    <div className={styles.entrydesc}>
                        {desc}
                    </div>
                    <div className={styles.price}>
                        {price}
                    </div>
                </div>
        </>
    )
}

export default orderEntry
