import styles from '../styles/CheckOutItem.module.css'

const CheckOutItem = (name, count, price) => {
    return (
        <>
           <div className={styles.container}>
               <div className={styles.name}>{name}</div>
               <div className={styles.price}>{price}</div>
            </div> 
        </>
    )
}

export default CheckOutItem
