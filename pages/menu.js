import {useState} from 'react';
import Head from 'next/head'
import Navigbar from '../components/Navigbar'
import styles from '../styles/Menu.module.css'
import Footer from '../components/Footer'
import Kitchen from '../components/Kitchen'
import LunchSpecial from '../components/LunchSpecial'
import SushiBar from '../components/SushiBar';

export default function Menu() {

    const [state, setState] = useState(<Kitchen />);


    const updateToKitchen = () => {
        setState(<Kitchen />);

    }

    const updateToLunchSpecial = () => {
        setState(<LunchSpecial />);
    }

    const updateToSushiBar = () => {
        setState(<SushiBar />)
    }
  return (
    <>
      <Navigbar/>
      <h1 className={styles.title}>Our Menu</h1>
      <p className={styles.body}>Click On the Following Options to Display the Corresponding Menu</p>
      <div className={styles.buttoncontainer}>
        <button className="buttoninverse" onClick={() => {updateToKitchen()}}>Kitchen</button>
        <button className="buttoninverse" onClick={() => {updateToLunchSpecial()}}>Lunch Special</button>
        <button className="buttoninverse" onClick={() => {updateToSushiBar()}}>Sushi Bar</button>
      </div>

      {state}
      <Footer />

      
    </>
  )
} 
