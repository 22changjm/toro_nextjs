import styles from '../styles/ReviewStrip.module.css'
import Link from 'next/link'

const ReviewStrip = () => {
    return (
        <>
        <div className={styles.reviewstrip}>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“This place was by far the best sushi place I&apos;ve been to since moving to Bakersfield. The owners and staff are super nice and attentive. We tried the Heart Attack (appetizer) and it was amazing…Honestly, the best sushi in the area. Definitely will be THE to-go place!!! Thank you Toro Fusion for an amazing dinner!”</div>
                <div className={styles.reviewtype}>— 5-Star Google Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“Location is perfect. The fish quality is good and they might have the best deals in town.” </div>
                <div className={styles.reviewtype}>— 5-Star Google Review</div>
            </div>
            <div className={styles.review}>
                <div className={styles.reviewdesc}>“This is probably my favorite sushi/restaurant- in Bakersfield, I love the welcoming atmosphere... Everyone says hello when you walk in, they&apos;ve got GREAT prices on rolls, &#38; the chefs do exquisite with presentation.”</div>
                <div className={styles.reviewtype}>— 5-Star Yelp Review</div>
            </div>
            <Link href="/reviews">
                <div className="button">Read More Reviews</div>
            </Link>

        </div>
     </>
    )
}

export default ReviewStrip
