import styles from '../styles/Kitchen.module.css'

const LunchSpecial = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.title}>Lunch Bentos</div>
                <div className={styles.body}>Includes miso soup&#44; mixed green salad &#38; 6pcs California or spicy tuna roll and steamed rice </div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Teriyaki Bento — 12.99 | 14.99 | 15.99</div>
                                <div className ={styles.entrydesc}>Charbroiled chicken | beef | salmon with house teriyaki sauce &#38; gyoza</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Poke Tuna — 18.99</div>
                                <div className ={styles.entrydesc}>Tuna, onion, cucumber, mixed greens, special spicy sauce</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Bulgogi Bento — 14.99</div>
                            <div className ={styles.entrydesc}>Prime beef tenderloin maintained in Korean spices &#38; stir fried with vegetable gyoza</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sushi Bento — 15.99</div>
                            <div className ={styles.entrydesc}>Tuna, salmon, yellowtail albacore, white tune &#38; shrimp (1 piece each)</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sashimi Bento — 17.99</div>
                            <div className ={styles.entrydesc}>Tuna, salmon, albacore &#38; yellowtail (2 pcs each)</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sushi &#38; Sashimi Bento — 20.99</div>
                            <div className ={styles.entrydesc}>Tuna, salmon, albacore &#38; yellowtail (2 pcs each)</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Lunch Bowls</div>
                <div className={styles.body}> Served over steamed rice with steamed vegetables </div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Teriyaki Bowl — 9.99 | 11.99 | 12.99</div>
                                <div className ={styles.entrydesc}>Charbroiled chicken | beef | salmonwith house teriyaki sauce &#38; steamed vegetables</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Bulgogi Bowl — 11.99</div>
                            <div className ={styles.entrydesc}>Prime beef tenderloin maintained in Korean spices &#38; stir fried with mixed vegetables</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Spicy Chicken | Shrimp Bowl — 10.99 | 13.99</div>
                            <div className ={styles.entrydesc}>Spicy chicken | shrimp &#38; pan fried vegetables</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LunchSpecial
