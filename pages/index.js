import Head from 'next/head'
import FavoriteStrip from '../components/FavoriteStrip'
import Navigbar from '../components/Navigbar'
import PhotoLogoStrip from '../components/PhotoLogoStrip'
import PhotoStrip from '../components/PhotoStrip'
import ReviewStrip from '../components/ReviewStrip'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import firebase from '../firebase/initFirebase'

firebase()

export default function Home() {
  return (
    <>
      <Head>
        <title>Toro Fusion Grill</title>
        <meta name="description" content="Toro Fusion Grill located at 1818 L Street Bakersfield, CA 93301" />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>
      <Navigbar/>
      <PhotoLogoStrip />
      <p id={styles.open}>We have relocated to 1818 L Street Bakersfield, CA</p>
      <img className={styles.homePhoto} src='/assets/background.jpeg' alt="review photo" />
      <FavoriteStrip />
      <PhotoStrip />
      <ReviewStrip />
      <Footer />
    </>
  )
}

