import styles from '../styles/FavoriteStrip.module.css'
import Link from 'next/link'


const FavoriteStrip = () => {
    return (
        <>
            <div className={styles.favcontainer}>
            <div className={styles.title}>Some of Our Favorites</div>
            <div className={styles.menu}>
                <div className={styles.col}>
                        <div className={styles.rollentry}>
                            <div className={styles.rollname}>Red Bull Roll</div>
                            <div className ={styles.rollinside}>Inside: shrimp tempura, spicy crabmeat, avocado and cucumber.</div>
                            <div className={styles.rolloutside}>Outside: filet mignon and jalapeno</div>
                        </div>
                        <div className={styles.rollentry}>
                            <div className={styles.rollname}>Ex-Girlfriend Roll</div>
                            <div className ={styles.rollinside}>Inside: shrimp tempura, spicy crabmeat, avocado and cucumber.</div>
                            <div className={styles.rolloutside}>Outside: tuna and salmon</div>
                        </div>
                        <div className={styles.rollentry}>
                            <div className={styles.rollname}>Screaming O</div>
                            <div className ={styles.rollinside}>Choice of seared ahi tuna or seared paprika salmon with signature sauce</div>
                        </div>
                    </div>

                <div className={styles.col}>
                    <div className={styles.rollentry}>
                        <div className={styles.rollname}>Popcorn Lobster Roll</div>
                        <div className ={styles.rollinside}>Inside: crabmeat, avocado and cucumber.</div>
                        <div className={styles.rolloutside}> Outside: deep fried langostino</div>
                    </div>
                    <div className={styles.rollentry}>
                        <div className={styles.rollname}>Crunchy Sexy Roll</div>
                        <div className ={styles.rollinside}>Inside: shrimp temora, crabmeat, avocado and cucumber.</div>
                        <div className={styles.rolloutside}> Outside: crunch flake</div>
                    </div>
                    <div className={styles.rollentry}>
                        <div className={styles.rollname}>Chicken Toro Fried Rice</div>
                        <div className ={styles.rollinside}>Over rice and seasoned vegetables in a sizzling stone bowl.</div>
                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.rollentry}>
                        <div className={styles.rollname}>Chicken Teriyaki Hot Stone Bowl</div>
                        <div className ={styles.rollinside}>Over rice and seasoned vegetables in a sizzling stone bowl</div>
                    </div>
                    <div className={styles.rollentry}>
                        <div className={styles.rollname}>Golden Tiger</div>
                        <div className ={styles.rollinside}>Inside: Shrimp tempura, avocado, cream cheese</div>
                        <div className={styles.rolloutside}>Outside: Spicy Crabmeat</div>

                    </div>
                    <div className={styles.rollentry}>
                        <div className={styles.rollname}>Bacon Garlic Fried Rice</div>
                        <div className ={styles.rollinside}>Stir friend bacon, garlic, and rice with seasonal vegetables</div>
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
            <Link href="/menu">
                <div className="button">View Full Menu</div></Link>
            <Link href="#order" className="button"><div className="button">Order Now</div></Link>

            </div>
        </div>

        </>
    )
}

export default FavoriteStrip
