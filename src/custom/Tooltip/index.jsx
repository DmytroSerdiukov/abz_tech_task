import React, { useState } from 'react'

import styles from './index.module.scss'

const Tooltip = ({children, content, visibleSymbolsCount = 30}) => {

    const [active, setActive] = useState(false)

    const showTip = () => {
        setActive(true)
    }

    const hideTip = () => {
        setActive(false)
    }

    if (children.length > visibleSymbolsCount)
        return <div 
        className={styles.tooltip__wrapper}
        onMouseEnter={showTip}
        onMouseLeave={hideTip}
    >
        <span>
            {children.slice(0, visibleSymbolsCount) + "..."}
        </span>
        {active && <div className={styles.tooltip__tip}>
            {content}
        </div>}
    </div>

    else return <div 
        className={styles.tooltip__wrapper}
    >
        <span>
            {children}
        </span>
    </div>
}

export default Tooltip


//if jobTitle.length > 25 then
//
const ToolTip = ({ children, css, visibleSymbolsCount = 30 }) => {
    if (children.length > visibleSymbolsCount)
      return (
        <div className={css || {}}>
          {children.slice(0, visibleSymbolsCount) + "..."}
          <div className={styles.card__tooltip}>{children}</div>
        </div>
      );
    else return <span className={css || {}}>{children}</span>;
  };
  