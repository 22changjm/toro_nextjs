import React from 'react'
import styles from '../styles/CheckBox.module.css'

const CheckBox = (props) => {
    return (
        <div className={props.styleName}>
            <div className={styles.container}>
                {typeof props.prices === 'object' && props.prices !== null? Object.entries(props.prices).map((value, index)=> {
                    
                    return (<div key={index} className={styles.buttoncontainer}>
                        <div className={styles.couple}> 
                            <input onClick={() => {props.buttonClick(value[1], value[0])}}className={styles.radio} type="radio" value={value[0]} name="type" /> 
                            <div className={styles.option}>
                                {value[0]}
                            </div>
                        </div>
                        <div className={styles.prices}>
                            {value[1]}
                        </div>
                    </div>);
                }): 
                            <div className={styles.singlePrice}>
                                {`Price: ${props.prices}`}
                            </div>

                }
                
            </div>
        </div>
    )
}

export default CheckBox
