import KitchenOrderSection from '../components/KitchenOrderSection';
import SushiBarOrderSection from '../components/SushiBarOrderSection';
import styles from '../styles/Order.module.css'
import {useState, useEffect} from 'react';

const OrderSide = (openModal) => {

    const [state, setState] = useState(<KitchenOrderSection openModal={openModal} />);

    return (
        <div>
            <div className={styles.buttondesc}>
            Click On the Following Options to Display the Corresponding Menu
            </div>
            <div className={styles.buttoncontainer}> 
                <button className="buttoninverse" onClick={() => {setState(<KitchenOrderSection openModal={openModal} />)}}>Kitchen</button>
                <button className="buttoninverse" onClick={() => {setState(<SushiBarOrderSection openModal={openModal} />)}}>Sushi Bar</button>
            </div>
            <div className={styles.menu}>
                {state}     
            </div>
        </div>
    )
}

export default OrderSide
