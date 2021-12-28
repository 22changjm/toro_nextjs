import styles from '../styles/PhotoStrip.module.css'

const PhotoStrip = () => {
    return (
        <>
         <div className={styles.stripContainer}>
             <div className={styles.photoRow}>
                <img className={styles.stripImage} src={'/Assets/1k.png'} alt="1k" />
                <img className={styles.stripImage} src={'/Assets/bibimbap.png'} alt="bibimbap" />
             </div>
             <div className={styles.photoRow}>
                <img className={styles.stripImage} src={'/Assets/poki.png'} alt="poki" />
                <img className={styles.stripImage} src={'/Assets/mussels.png'} alt="mussels" />
             </div>
             <div className={styles.photoRow}>
                <img className={styles.stripImage} src={'/Assets/sashimi.png'} alt="sashimi" />
                <img className={styles.stripImage} src={'/Assets/uni.png'} alt="uni"/>

             </div>
         </div>
     </>
    )
}

export default PhotoStrip
