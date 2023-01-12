import styles from '../styles/Kitchen.module.css'

const SushiBar = () => {
    return (
        <>

             <div className={styles.container}>
                <div className={styles.title}>Sushi Bar Special</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sushi Special — 19.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sashimi Special — 28.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sushi Combo — 25.99|29.99|33.99</div>
                                <div className={styles.entrydesc}>15 pc|18 pc|21 pc</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sashimi Combo — 26.99|32.99|36.99</div>
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
                                <div className={styles.entryname}>Tuna — Maguro</div>
                                <div className={styles.entrydesc}>7.00 Sushi|16.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Albacore — Shiro Maguro</div>
                                <div className={styles.entrydesc}>6.50 Sushi|15.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Cajun Tuna — Seared Spicy Maguro</div>
                                <div className={styles.entrydesc}>8.00 Sushi|16.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>White Tuna — Ono</div>
                                <div className={styles.entrydesc}>7.50 Sushi|15.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Toro — Tuna, Fatty</div>
                                <div className={styles.entrydesc}>M.P. Sushi|M.P. Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon — Sake</div>
                                <div className={styles.entrydesc}>7.00 Sushi|15.00 Sashimi</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                        <div className={styles.entry}>
                                <div className={styles.entryname}>Paprika Salmon — Seared Spicy Sake</div>
                                <div className={styles.entrydesc}>8.00 Sushi|16.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Yellowtail — Hamachi</div>
                                <div className={styles.entrydesc}>7.50 Sushi|17.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Mackerel — Sabe</div>
                                <div className={styles.entrydesc}>6.00 Sushi|15.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Cooked Shrimp — Ebi</div>
                                <div className={styles.entrydesc}>5.50 Sushi|15.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Raw Shrimp — Amebi</div>
                                <div className={styles.entrydesc}>11.00 Sushi|M.P. Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon Roe — Ikura</div>
                                <div className={styles.entrydesc}>7.00 Sushi|14.99 Sashimi</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Flying Fish Roe — Tobiko</div>
                                <div className={styles.entrydesc}>7.00 Sushi|14.99 Sashimi</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sea Urchin — Uni</div>
                            <div className={styles.entrydesc}>10.00 Sushi|M.P. Sashimi</div></div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Fresh Water Eel — Unagi</div>
                            <div className={styles.entrydesc}>8.50 Sushi|16.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Red Snapper — Tai</div>
                            <div className={styles.entrydesc}>7.00 Sushi|14.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Halibut — Hirame</div>
                            <div className={styles.entrydesc}>8.00 Sushi|15.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Bay Scallops — Kalbashira</div>
                            <div className={styles.entrydesc}>7.00 Sushi|14.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Octopus — Tako</div>
                            <div className={styles.entrydesc}>7.00 Sushi|14.99 Sashimi</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Squid — Ika</div>
                            <div className={styles.entrydesc}>7.00 Sushi|14.99 Sashimi</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.container}>
                <div className={styles.title}>Classic Rolls</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>California Roll — 6.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Spicy California Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Spicy Tuna Toll — 8.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Philadelphia Roll — 8.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Vegetable Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Avocado Roll — 6.99</div>
                            </div>
                    </div>

                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Cucumber Roll — 5.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Tuna Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon Roll — 7.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Yellowtail Roll — 7.99</div>
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
                                <div className={styles.entryname}>Shrimp Tempura Roll — 9.99</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Salmon Tempura Roll — 11.99</div>
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

            <div className={styles.container}>

    <div className={styles.title}> Baked Rolls </div>
    
    <div className={styles.menu}>

        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Crazy Dream — 15.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cream cheese | Out: baked salmon</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Caterpillar — 15.99</div>
                    <div className={styles.entrydesc}>In: BBQ Eel, crabmeat, cucumber | Out: BBQ Eel</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Dragon — 16.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: BBQ Eel</div>
            </div>
        </div>

        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Koko Lobster — 19.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: langostino</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Sapporo — 17.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: baby baked scallop</div>
            </div>
        </div>

        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Volcano — 18.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cream cheese | Out: baked salmon</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>White Monster — 17.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, crabmeat, avocado | Out: baked white fish</div>
            </div>
        </div>
 
    </div>

    <div className={styles.title}> Tempura Rolls </div>
    
    <div className={styles.menu}>

        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>1K — 13.99</div>
                <div className={styles.entrydesc}>spicy tuna, crabmeat, avocado, cream cheese (whole deep fried)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Crispy Cali — 12.99</div>
                    <div className={styles.entrydesc}>crabmeat, avocado (whole deep fried)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Eskimo — 14.99</div>
                <div className={styles.entrydesc}>In: spicy crabmeat, avocado, cream cheese | Out: salmon (whole deep fried)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Golden Tiger — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, avocado, cream cheese (deep fried) | Out: spicy crabmeat</div>
            </div>
        </div>

        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Hot & Hot — 17.99</div>
                <div className={styles.entrydesc}>In: spicy tuna, cream cheese, jalapeno (deep fried) | Out: spicy tuna, crispy red onion</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>OMG (6 pcs) — 16.99</div>
                <div className={styles.entrydesc}>In: tuna, salmon, yellowtail, spicy crabmeat, jalapeno (whole deep fried)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Panda (6 pcs) — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy tuna, avocado, cream cheese (deep fried) | Out: spicy scallop, crabstick</div>
            </div>
        </div>

        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Popcorn Lobster — 19.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: deep fried langostino</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Vegas — 15.99</div>
                <div className={styles.entrydesc}>In: salmon, avocado, cream cheese (deep fried)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Rattlesnake — 15.99</div>
                <div className={styles.entrydesc}>In: spicy tuna, crabmeat, avocado, cream cheese, jalapeno with tortilla wrap (whole deep fried)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Red Rock — 16.99</div>
                <div className={styles.entrydesc}>In: beef (bulgogi), cream cheese with rice biscuit (deep fried) | Out: spicy tuna, jalapeno</div>
            </div>
        </div>
 
    </div>

     <div className={styles.title}> Fresh Rolls </div>
    
     <div className={styles.menu}>
 
         <div className={styles.col}>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Alaska — 16.99</div>
                 <div className={styles.entrydesc}>In: spicy tuna, cucumber | Out: paprika salmon</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Boyfriend — 16.99</div>
                     <div className={styles.entrydesc}>In: spicy tuna, avocado, crabmeat, cucumber | Out: cajun tuna, garlic chip</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Ceviche (6 pcs) — 17.99</div>
                 <div className={styles.entrydesc}>In: spicy tuna, crabmeat, avocado, cucumber | Out: spicy assorted fish poky, cilantro, tobiko, lemon preserved in sugar</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Flamingo — 16.99</div>
                 <div className={styles.entrydesc}>In: assorted fish, spicy tuna, crabmeat, avocado | Out: tohiko</div>
             </div>
             <div className={styles.entry}>
                <div className={styles.entryname}>Fish Burrito — 16.99</div>
                <div className={styles.entrydesc}>In: tuna, salmon, yellowtail, crabmeat, avocado, custard egg wrapped with soypaper (no rice)</div>
            </div>
         </div>
 
         <div className={styles.col}>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Mellow Yellow — 16.99</div>
                 <div className={styles.entrydesc}>In: spicy crabmeat, avocado, cucumber | Out: torched yellowtail, salsa</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Hot Night — 16.99</div>
                 <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: spicy tuna, crunch flake</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Last Frontier — 17.99</div>
                 <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: salmon, spicy tuna</div>
             </div>
             <div className={styles.entry}>
                <div className={styles.entryname}>Lemon Flush — 16.99</div>
                <div className={styles.entrydesc}>In: BBQ Eel, crabmeat, cucumber | Out: BBQ Eel</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Orange Dragon — 16.99</div>
                <div className={styles.entrydesc}>In: BBQ Eel, crabmeat, avocado, cucumber | Out: salmon</div>
            </div>
         </div>
 
         <div className={styles.col}>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Rainbow — 17.99</div>
                 <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: 4 kinds of fish</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Sake Sake — 15.99</div>
                 <div className={styles.entrydesc}>In: salmon tempura, crabmeat, cucumber | Out: spicy salmon</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Sexy — 16.99</div>
                 <div className={styles.entrydesc}>In: salmon, cooked shrimp, spicy crabmeat wrapped with cucumber (no rice)</div>
             </div>
             <div className={styles.entry}>
                 <div className={styles.entryname}>Spicy Girl — 16.99</div>
                 <div className={styles.entrydesc}>In: spicy scallop, crabmeat, cucumber | Out: salmon, tuna, jalapeno, crunch flake</div>
             </div>
             <div className={styles.entry}>
                <div className={styles.entryname}>Three Amigos — 16.99</div>
                <div className={styles.entrydesc}>In: crabmeat, avocado, cucumber | Out: paprika, salmon, cajun tuna, albacore tuna</div>
            </div>
         </div>
  
     </div>

    <div className={styles.title}> Specialty Rolls </div>
    
    <div className={styles.menu}>
      
        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Albacore Special — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy tuna, cucumber | Out: seared albacore, crispy red onion</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Avocado Crunch — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy crabmeat, cream cheese, cucumber | Out: sliced avocado, crunch flake</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Crunch Sexy — 15.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, crabmeat, avocado, cucumber | Out: crunch flake</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Ex-Girlfriend — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy crabmeat, avocado, cucumber | Out: tuna, salmon</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Flaming Dragon (served on fire) — 18.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy tuna, cucumber | Out: salmon, yellowtail</div>
            </div>
        </div>
      
        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>King Kong (10 pcs) — 19.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, BBQ eel, spider, spicy tuna, cucumber, spicy crabmeat | Out: sliced avocado, crunch flake</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Mango Tango — 17.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy crabmeat, avocado, cucumber | Out: torched tuna, salmon</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>New York New York — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy crab, cream cheese, cucumber | Out: torched tuna, salmon</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Rainbow Deluxe — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy tuna, cucumber | Out: 5 kinds of fish</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Red Bull — 17.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy crabmeat, avocado, cucumber | Out: fillet mignon, jalapeno</div>
            </div>
        </div>
      
        <div className={styles.col}>
            <div className={styles.entry}>
                <div className={styles.entryname}>Sushi 101 — 16.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, crabmeat, avocado, cucumber | Out: spicy tuna, tempura eel</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Shrimp Lover — 15.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, crabmeat, cucumber | Out: cooked shrimp</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Titanic (served on fire) — 18.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, crabmeat, cucumber | Out: BBQ Eel</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Viking — 17.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, spicy crabmeat, cream cheese, cucumber | Out: spicy tuna, beef (bulgogi)</div>
            </div>
            <div className={styles.entry}>
                <div className={styles.entryname}>Yellow Submarine — 15.99</div>
                <div className={styles.entrydesc}>In: shrimp tempura, crabmeat, avocado, wrapped with soy paper | Out: spicy tuna</div>
            </div>
        </div>
       
    </div>
</div>
            

        </>
    )
}

export default SushiBar
