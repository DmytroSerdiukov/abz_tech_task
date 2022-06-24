import React from 'react'
import styles from './index.module.scss'

const Button = ({text = 'Text', disabled = false, style={}}) => {
    return <button style={style} disabled={disabled} className={styles.button}>
        {text}
    </button>
}

export default Button