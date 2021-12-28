import styles from '../styles/Kitchen.module.css'

const SushiBar = () => {
    return (
        <>
             <div className={styles.container}>
                <div className={styles.title}>Sushi Bar Special</div>
                <div className={styles.body}>* indicates items eligible for 50% discount with a call-in order to restaurant and with cash payment</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sushi Special — 19.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sashimi Special — 28.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sushi Combo — 32.99|36.99|40.99</div>
                                <div className={styles.entrydesc}>15 pc|18 pc|21 pc</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sashimi Combo — 42.99|48.99|58.99</div>
                            <div className ={styles.entrydesc}>20 pc|24 pc|30 pc</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sushi &#38; Sashimi Combo — 45.99 | 62.99</div>
                            <div className ={styles.entrydesc}>Small | Large</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.container}>
                <div className={styles.title}>Sushi and Sashimi</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Tuna — Maguro</div>
                                <div className={styles.entrydesc}>6.50 Sushi|14.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Albacore — Shiro Maguro</div>
                                <div className={styles.entrydesc}>6.00 Sushi|13.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Cajun Tuna — Seared Spicy Maguro</div>
                                <div className={styles.entrydesc}>6.50 Sushi|14.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>White Tuna — Ono</div>
                                <div className={styles.entrydesc}>6.00 Sushi|13.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Toro — Tuna, Fatty</div>
                                <div className={styles.entrydesc}>M.P. Sushi|M.P. Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Salmon — Sake</div>
                                <div className={styles.entrydesc}>6.00 Sushi|13.99 Sashimi</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                        <div className={styles.entry}>
                                <div className={styles.entryname}>*Paprika Salmon — Seared Spicy Sake</div>
                                <div className={styles.entrydesc}>6.50 Sushi|14.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Yellowtail — Hamachi</div>
                                <div className={styles.entrydesc}>7.00 Sushi|15.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Mackerel — Sabe</div>
                                <div className={styles.entrydesc}>4.50 Sushi|12.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Cooked Shrimp — Ebi</div>
                                <div className={styles.entrydesc}>6.50 Sushi|13.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Raw Shrimp — Amebi</div>
                                <div className={styles.entrydesc}>9.50 Sushi|M.P. Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon Roe — Ikura</div>
                                <div className={styles.entrydesc}>5.50 Sushi|12.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Flying Fish Roe — Tobiko</div>
                                <div className={styles.entrydesc}>5.50 Sushi|12.99 Sashimi</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sea Urchin — Uni</div>
                            <div className={styles.entrydesc}>10.00 Sushi|M.P. Sashimi</div></div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Fresh Water Eel — Unagi</div>
                            <div className={styles.entrydesc}>6.50 Sushi|14.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>*Red Snapper — Tai</div>
                            <div className={styles.entrydesc}>5.50 Sushi|12.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Halibut — Hirame</div>
                            <div className={styles.entrydesc}>6.00 Sushi|13.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Bay Scallops — Kalbashira</div>
                            <div className={styles.entrydesc}>5.50 Sushi|12.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Octopus — Tako</div>
                            <div className={styles.entrydesc}>5.50 Sushi|12.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Squid — Ika</div>
                            <div className={styles.entrydesc}>5.50 Sushi|12.99 Sashimi</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.container}>
                <div className={styles.title}>Classic Rolls</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>California Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Spicy California Roll — 8.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Spicy Tuna Toll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Philadelphia Roll — 9.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Vegetable Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Avocado Roll — 5.99</div>
                            </div>
                    </div>

                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Cucumber Roll — 4.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Tuna Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Yellowtail Roll — 8.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon Skin Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Chicken Teriyaki Roll — 7.99</div>
                            </div>
                    </div>


                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Shrimp Tempura Roll — 11.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>*Salmon Tempura Roll — 11.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Spider Roll — 12.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Calamari Crunch Roll — 10.99</div>
                            </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default SushiBar
