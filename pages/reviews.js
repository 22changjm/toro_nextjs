import Navigbar from '../components/Navigbar'
import Footer from '../components/Footer'
import styles from '../styles/Reviews.module.css'
import Head from 'next/head';


export default function Reviews() {
  return (
    <>
    <Head>
        <title>Toro Fusion Grill</title>
        <meta name="description" content="Toro Fusion Grill located at 1818 L Street Bakersfield, CA 93301" />
        <link rel="icon" href="/assets/toro_icon.png" /> 
      </Head>
      <Navigbar/>
      <div className={styles.container}>
            <img className={styles.homePhoto} src='/assets/sake.png' alt="review photo" />
            <div className={styles.header}>Some of our Reviews</div>
    </div>
    <div className={styles.reviewstrip}>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“Sooo good! I had the flaming dragon roll and some teriyaki chicken. The food was delicious, the atmosphere was nice and all of the staff was amazing. I will definitely be back! I don&apos;t drink often but I had to get some Saki. Perfect.”</div>
                <div className={styles.reviewtype}>— 5-Star Google Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“Location is perfect. The fish quality is good and they might have the best deals in town.” </div>
                <div className={styles.reviewtype}>— 5-Star Google Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“I can &apos; t believe we&apos;ve been in town for over a year and have never been here! Our first time and I couldn&apos;t have been more impressed. The food was delicious, and the service was the best I&apos;ve had in a LOOOOONG time.</div>
                <div className={styles.reviewtype}>— 5-Star Google Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“Sushi... super satisfying. Great ambiance &#38; decor. The staff was very helpful and observant. It has an awesome feel to it.”</div>
                <div className={styles.reviewtype}>— 5-Star Google Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“This is probably my favorite sushi/restaurant- in Bakersfield, I love the welcoming atmosphere…Everyone says hello when you walk in, they&apos;ve got GREAT prices on rolls, &#38; the chefs do exquisite with presentation”</div>
                <div className={styles.reviewtype}>— 5-Star Yelp Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“Awesome server and food! We got there and were greeted right away and seated. The highlighted on menu were half off. My friend and I loved it so much that we will for sure be back.”</div>
                <div className={styles.reviewtype}>— 5-Star Yelp Review</div>
            </div>
        </div>
      <Footer />
      
    </>
  )
}
