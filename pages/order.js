import {useState} from 'react';
import Navigbar from '../components/Navigbar'
import Footer from '../components/Footer'
import OrderSection from '../components/OrderSection';

export default function Order() {
  return (
    <>
      <Navigbar/>
      {OrderSection('Sushi Bar', 'Sushi and Sashimi')}
      {OrderSection('Sushi Bar', 'Classic Rolls')}
      {OrderSection('Sushi Bar', 'Baked Rolls')}
      {OrderSection('Sushi Bar', 'Tempura Rolls')}
      {OrderSection('Sushi Bar', 'Fresh Rolls')}
      {OrderSection('Sushi Bar', 'Specialty Rolls')}
      {OrderSection('Sushi Bar', 'Sushi Bar Special')}

      <Footer />
    </>
  )
} 
