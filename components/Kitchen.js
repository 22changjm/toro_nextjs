import styles from '../styles/Kitchen.module.css'

const Kitchen = () => {
    return (
        <>  
            <div className={styles.container}>
                <div className={styles.title}>Toro Specialties</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Screaming Orgasm — 20.99</div>
                                <div className ={styles.entrydesc}>Choice of seared ahi tuna | seared paprika salmon with signature sauce</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Poke Tuna — 18.99</div>
                                <div className ={styles.entrydesc}>Tuna, onion, cucumber, mixed greens, special spicy sauce</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Yellowtail Jalapeno — 18.99</div>
                            <div className ={styles.entrydesc}>Yellowtail sashimi served with ponzu sauce, jalpeño slices &#38; masago</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Salmon Steak — 25.99</div>
                            <div className ={styles.entrydesc}>Salmon steak with ponzu sauce, grilled &#38; served with tempura asparagus &#38; mixed greens</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Japanese Tacos — 17.99</div>
                            <div className ={styles.entrydesc}>Mixed sashimi, avocado &#38; spicy sauce on tempura gyoza skin</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Appetizers</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Edamame — 5.99|7.99|8.99</div>
                                <div className ={styles.entrydesc}>Edamame | Toro Edamame | Spicy Edamame. Steamed &#38; salted soy bean pods.</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Fresh Oysters — 11.99</div>
                                <div className ={styles.entrydesc}>Served on the half shell with garlic ponzu, scallions, masago &#38; lemon slices</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Shrimp Wrap — 14.99</div>
                                <div className ={styles.entrydesc}>Spicy crab, tempura shrimp, cucumber &#38; mixed greens wrapped in rice paper</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Chicken Gyoza — 8.99</div>
                            <div className ={styles.entrydesc}>Chicken &#38; vegetable stuffed dumplings</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Dragon Ball — 13.99</div>
                            <div className ={styles.entrydesc}>Spicy tuna, crab meat, avocado &#38; cream cheese combined into a ball</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Calamari Rings — 11.99</div>
                            <div className ={styles.entrydesc}>Tempura calamari served with 3 sauces</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Firecrackers — 15.99</div>
                            <div className ={styles.entrydesc}>Spicy tuna served with fried wonton skins</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Heart Attack — 12.99</div>
                            <div className ={styles.entrydesc}>Tempura jalpeños stuffed with spicy tuna &#38; cream cheese</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Monkey Brain — 12.99</div>
                            <div className ={styles.entrydesc}>Tempura mushrooms stuffed with spicy tuna &#38; crab meat</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Baked Green Mussel — 11.99</div>
                            <div className ={styles.entrydesc}>Mussels baked in house sauce, served on the half shell</div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Salads</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>House Salad — 7.99</div>
                                <div className ={styles.entrydesc}>Mixed greens salad with choice of pineapple or ginger dressing</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Seaweed Salad — 7.99</div>
                                <div className ={styles.entrydesc}>Thinly sliced seaweed in sesame oil &#38; seasonings</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Sunomono Salad — 6.99</div>
                                <div className ={styles.entrydesc}>Sliced Japanese cucumber pickled in sweet vinegar | Add 2.00 | kani (crab) | tako (octopus) | ebi (shrimp)</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Grilled Chicken Salad — 17.99</div>
                            <div className ={styles.entrydesc}>Grilled chicken over mixed greens with house dressing</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Grilled Salmon Salad — 19.99</div>
                            <div className ={styles.entrydesc}>Grilled salmon over mixed greens with balsamic ponzu sauce</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Spicy Tuna Salad — 21.99</div>
                            <div className ={styles.entrydesc}>Sliced tuna sashimi in spicy sauce over mixed greens</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sashimi Salad — 21.99</div>
                            <div className ={styles.entrydesc}>Chef&#39;s choice of sashimi over mixed greens</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Shrimp Avocado Salad — 19.99</div>
                            <div className ={styles.entrydesc}>Shrimp, avocado, cucumber, imitation crab &#38; daikon radish in wasabi mayo over mixed greens</div>
                        </div>
                    </div>
                </div>
            </div>


            <div className={styles.container}>
                <div className={styles.title}>Tempura</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Shrimp Tempura — 10.99 | 19.99</div>
                                <div className ={styles.entrydesc}>Shrimp lightly battered &#38; fried, served with tempura sauce - 4 pcs | 8 pcs</div>
                            </div>
                        
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Vegetable Tempura — 12.99 | 21.99</div>
                            <div className ={styles.entrydesc}>Assorted vegetables lightly battered &#38; fried, served with tempura sauce - small | large</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Combo Tempura — 15.99</div>
                            <div className ={styles.entrydesc}>2 shrimp &#38; assorted vegetables</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Entrees</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Teriyaki — 18.99 | 20.99 | 21.99</div>
                                <div className ={styles.entrydesc}>Charbroiled Chicken | Beef | Salmon with house teriyaki sauce</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Tempura Combination — 24.99 | 26.99 | 27.99</div>
                                <div className ={styles.entrydesc}>Mixed tempura vegetables &#38; choice of Teriyaki Chicken | Beef | Salmon</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Bulgogi — 21.99</div>
                            <div className ={styles.entrydesc}>Beef tenderloin marinated in Korean spices, thinly sliced &#38; stir fried with onion, carrots, mushrooms &#38; green onions</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Spicy — 19.99 | 23.99</div>
                            <div className ={styles.entrydesc}>Chicken | Shrimp with onions, peppers, mushrooms &#38; green onions sautéed in Korean spicy sauce with steamed rice</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Spicy Sauteed Pork — 21.99</div>
                            <div className ={styles.entrydesc}>Thinly sliced pork sautéed in Korean spicy sauce with onions, peppers, carrots &#38; scallions</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Don Katsu — 21.99</div>
                            <div className ={styles.entrydesc}>Pork tenderloin lightly breaded with Panko, then cooked tempura style, served with special sauce</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Chicken Katsu — 20.99</div>
                            <div className ={styles.entrydesc}>A butterflied chicken breast, seasoned, coated in Japanese panko breadcrumbs, deep fried</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Noodles</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Ramen Combo — 19.99</div>
                                <div className ={styles.entrydesc}>Korean style Ramen with choice of California Roll | Spicy Tuna Roll</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Kaki Udon — 15.99</div>
                                <div className ={styles.entrydesc}>Japanese noodles with light soy &#38; seafood broth</div>
                            </div>
                        
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Tempura Udon — 21.99</div>
                            <div className ={styles.entrydesc}>Japanese Noodles in light soy broth with Tempura shrimp &#38; vegetables</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Yakisoba — 15.99|18.99|19.99</div>
                            <div className ={styles.entrydesc}>Stir fried noodle with choice of meat, vegetables, flavored with yakisoba sauce, served with garnishment</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Rice</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Toro Fried Rice — 13.99|15.99|16.99|17.99|18.99</div>
                                <div className ={styles.entrydesc}>Vegetable | Chicken | Beef | Shrimp| combo mixed with rice and vegetables</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Bacon Garlic Fried Rice — 18.99</div>
                                <div className ={styles.entrydesc}>Stir Fried bacon, garlic and rice, along with seasonal vegetables</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Toro Fusion Bowl — 16.99|19.99|19.99|19.99</div>
                            <div className ={styles.entrydesc}>Vegetables | Chicken | Beef | Shrimp over rice &#38; seasoned vegetables in sizzling stone bowl</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Chirashi Bowl — 24.99</div>
                            <div className ={styles.entrydesc}>Chef’s choice of sashimi over steamed rice.</div>
                        </div>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Sashimi Bowl — 24.99</div>
                            <div className ={styles.entrydesc}>Chef’s choice of sashimi, mixed greens &#38; vegetables over rice.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Soup</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Spicy Tofu Soup — 11.95</div>
                                <div className ={styles.entrydesc}>Vegetables | Beef | Seafood in spicy broth with tofu, egg, seafood &#38; Korean spices</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Spicy Fish Stew — 18.99</div>
                            <div className ={styles.entrydesc}>Fish stew with onions, radish, garlic, chili pepper, tofu, crown daisy, enoki mushrooms, garlic &#38; tofu</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Spicy Seafood Stew — 18.99</div>
                            <div className ={styles.entrydesc}>Spicy stew with clams, mussels, shrimp, crab, with daikon radish, green onions, crown daisy, enoki mushrooms, garlic &#38; tofu</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>Dessert</div>
                <div className={styles.menu}>
                    <div className={styles.col}>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Mochi Ice Cream — 5.95</div>
                                <div className ={styles.entrydesc}>Green tea | Mango | Strawberry Ice Cream inside sweet rice dough</div>
                            </div>
                            <div className={styles.entry}>
                                <div className={styles.entryname}>Ice Cream — 5.95</div>
                                <div className ={styles.entrydesc}>Green Tea | Mango | Strawberry Ice Cream</div>
                            </div>
                        </div>

                    <div className={styles.col}>
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Tempura Ice Cream — 8.95</div>
                            <div className ={styles.entrydesc}>Green Tea | Mango | Strawberry lightly battered &#38; fried</div>
                        </div>
                    </div>

                    <div className={styles.col}>
                        
                        <div className={styles.entry}>
                            <div className={styles.entryname}>Tempura Banana — 9.95</div>
                            <div className ={styles.entrydesc}>Lightly battered &#38; fried Banana with green tea | mango | strawberry ice cream</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Kitchen
