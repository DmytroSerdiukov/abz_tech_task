import React from 'react'
import styles from './index.module.scss'

const Button = ({text = 'Text', disabled = false}) => {
    return <button disabled={disabled} className={styles.button}>
        {text}
    </button>
}

export default Button