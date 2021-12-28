import styles from '../styles/PhotoLogoStrip.module.css'
import Image from 'next/image'


const PhotoLogoStrip = () => {
    return (
        <>
        <div className={styles.container}>
            <div className={styles.photoContainer}>
            <img className={styles.homePhoto} src='/assets/home-photo.png' alt="home photo" />
            <div className={styles.mobileLogo}>
                <div className={styles.header}>Toro Fusion Grill</div>
                <div className={styles.body}>1818 L Street</div>
                <div className={styles.body}>Bakersfield, CA</div>
            </div>
            </div>
            <div className={`${styles.logoContainer} ${styles.noMobile}`}>
            <div className={styles.logo}>
                <div className={styles.header}>Toro Fusion Grill</div>
                <div className={styles.body}>1818 L Street</div>
                <div className={styles.body}>Bakersfield, CA</div>
            </div>
            </div>
        </div>
    </>
    )
}

export default PhotoLogoStrip
