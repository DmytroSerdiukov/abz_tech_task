import React from 'react'
import styles from './index.module.scss'

const Button = ({text = 'Text', disabled = false, style={}, fn}) => {
    return <button onClick={fn} style={style} disabled={disabled} className={styles.button}>
        {text}
    </button>
}

export default Button