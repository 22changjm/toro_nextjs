import styles from '../styles/Footer.module.css'

const Footer = () => {
    return (
        <>
       <div className= {styles.footercontainer}>
            <div className={styles.storeinfo}>
                <div className={styles.titlefont}> Toro Sushi Bar and Grill</div>
                <div className={styles.bodyfont}> 1818 L Street,</div>
                <div className={styles.bodyfont}> Bakersfield, California 93301</div>
                <div className={styles.bodyfont}>torofusion@gmail.com</div>
                <div className={styles.bodyfont}>(661)663-7878</div>
                <div></div>

            </div>
            <div className={styles.hourinfo}>
                <div className={`${styles.hourtitle} ${styles.headerfont}`}> Hours </div>
                <div className={styles.daytimecontainer}>
                    <div className={styles.daycontainer}>
                        <div className={`${styles.day} ${styles.bodyfont}`}>Monday-Thursday</div>
                        <div className={`${styles.day} ${styles.bodyfont}`}>Friday</div>
                        <div className={`${styles.day} ${styles.bodyfont}`}>Saturday</div>
                        <div className={`${styles.day} ${styles.bodyfont}`}>Sunday</div>
                    </div>
                    <div className={styles.timecontainer}>
                        <div className={`${styles.time} ${styles.bodyfont}`}> 11am-10pm</div>
                        <div className={`${styles.time} ${styles.bodyfont}`}> 11am-11pm</div>
                        <div className={`${styles.time} ${styles.bodyfont}`}> 12pm-11pm</div>
                        <div className={`${styles.time} ${styles.bodyfont}`}> 12pm-9:30pm</div>
                    </div>
                </div>
            </div>

            <div className={styles.socialinfo}>
                <div className={styles.bodyfont}> Yelp </div>
                <div className={styles.bodyfont}> Facebook </div>
            </div>
       </div>
     </>
    )
}

export default Footer
