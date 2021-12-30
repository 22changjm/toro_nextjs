import React from 'react'
import styles from '../styles/Modal.module.css'

const Modal = (props) => {
    return (
        <div>
            <div className={styles.modaloverlay} id={styles.modaloverlay}></div>
            <div className={styles.modal} id={styles.modal}>
            <button onClick={props.handleClick} className={styles.closebutton} id={styles.closebutton}>Obvious Close Button</button>
            <div className={styles.modalguts}>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <p>{props.price}</p>
                <button onClick={()=>{props.addToCart(props.title, props.price)}}className="buttoninverse">Add to Cart</button>
            </div>
            </div>
        </div>
    )
}

export default Modal
