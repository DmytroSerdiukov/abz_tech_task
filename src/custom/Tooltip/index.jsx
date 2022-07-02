import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip'

import styles from './index.module.scss'

const ToolTip = ({children, direction='bottom'}) => {
  
  
  const [visible, setVisible] = useState(false)

  const showTip = () => setTimeout(() => setVisible(true), 300)
  
  const hideTip = () => setVisible(false)
  
  if (children.length > 25)
    return <div>
        <div data-tip data-for={`${children}`}>{children.slice(0,25)+'...'}</div>
        <ReactTooltip id={`${children}`} place='bottom' effect='solid'>
            {children}
        </ReactTooltip>
    </div>
  else return <div>
    {children}
  </div>
}

    // if (children.length > visibleSymbolsCount)
    //     return <div 
    //     className={styles.tooltip__wrapper}
    //     onMouseEnter={showTip}
    //     onMouseLeave={hideTip}
    // >
    //     {children.slice(0, visibleSymbolsCount) + "..."}
    //     {active && <div className={styles.tooltip__tip}>
    //         {children}
    //     </div>}
    // </div>

    // else return <div 
    //     className={styles.tooltip__wrapper}
    // >
    //     <div>
    //         {children}
    //     </div>
    // </div>
// }

export default ToolTip

  