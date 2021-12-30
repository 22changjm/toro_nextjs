import {useState} from 'react';
import Navigbar from '../components/Navigbar'
import Footer from '../components/Footer'
import OrderSection from '../components/OrderSection';
import styles from '../styles/Order.module.css'
import CheckoutBar from '../components/CheckoutBar';

export default function Order() {
  return (
    <>
      <Navigbar/>
      <div className={styles.container}>
          <div className={styles.menu}>
            {OrderSection('Sushi Bar', 'Sushi and Sashimi')}
            {OrderSection('Sushi Bar', 'Classic Rolls')}
            {OrderSection('Sushi Bar', 'Baked Rolls')}
            {OrderSection('Sushi Bar', 'Tempura Rolls')}
            {OrderSection('Sushi Bar', 'Fresh Rolls')}
            {OrderSection('Sushi Bar', 'Specialty Rolls')}
            {OrderSection('Sushi Bar', 'Sushi Bar Special')}

            {OrderSection('Kitchen', 'Appetizers')}
            {OrderSection('Kitchen', 'Salads')}
            {OrderSection('Kitchen', 'Toro Specialties')}
            {OrderSection('Kitchen', 'Entrees')}
            {OrderSection('Kitchen', 'Tempura')}
            {OrderSection('Kitchen', 'Rice')}
            {OrderSection('Kitchen', 'Noodles')}
            {OrderSection('Kitchen', 'Soup')}
            {OrderSection('Kitchen', 'Dessert')}
          </div>
          <div className={styles.placeholder}></div>
          <CheckoutBar />
      </div>



    </>
  )
} 
