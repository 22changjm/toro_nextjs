import styles from '../styles/PhotoStrip.module.css'

const PhotoStrip = () => {
    return (
        <>
         <div className={styles.stripContainer}>
             <div className={styles.photoRow}>
                <img className={styles.stripImage} src='/assets/1k.png' alt="1k" />
                <img className={styles.stripImage} src='/assets/bibimbap.png' alt="bibimbap" />
             </div>
             <div className={styles.photoRow}>
                <img className={styles.stripImage} src='/assets/poki.png' alt="poki" />
                <img className={styles.stripImage} src='/assets/mussels.png' alt="mussels" />
             </div>
             <div className={styles.photoRow}>
                <img className={styles.stripImage} src='/assets/sashimi.png' alt="sashimi" />
                <img className={styles.stripImage} src='/assets/uni.png' alt="uni"/>

             </div>
         </div>
     </>
    )
}

export default PhotoStrip
