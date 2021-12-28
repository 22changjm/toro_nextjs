import styles from '../styles/PhotoReviewStrip.module.css'


const PhotoReviewStrip = () => {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.homePhoto} src='/assets/sake.png' alt="review photo" />
            <div className={styles.header}>Some of our Reviews</div>
        </div>
    </>
    )
}

export default PhotoReviewStrip
