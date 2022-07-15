import React from 'react'
import ReactTooltip from 'react-tooltip'


const ToolTip = ({children, direction='bottom'}) => {
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

export default ToolTip

  