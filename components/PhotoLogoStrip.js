import styles from '../styles/PhotoLogoStrip.module.css'
import Image from 'next/image'


const PhotoLogoStrip = () => {
    return (
        <>
        <div className={styles.container}>
            <img className={styles.homePhoto} src='/assets/inside.jpeg' alt="home photo" />
        </div>
    </>
    )
}

export default PhotoLogoStrip
