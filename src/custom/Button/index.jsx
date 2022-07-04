import React from 'react'
import styles from './index.module.scss'

const Button = ({text = 'Text', disabled = false, css={}, fn}) => {
    return <button onClick={fn} style={css} disabled={disabled} className={styles.button}>
        {text}
    </button>
}

export default Button