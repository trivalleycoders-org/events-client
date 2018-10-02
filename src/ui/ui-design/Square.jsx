import React from 'react'
import Body1 from 'ui/ui-elements/typography/Body1'

const Square = ({ color, bgColor, children }) => {
  const style = {
    width: 100,
    height: 100,
    backgroundColor: bgColor,
    color: color,
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={style}>
      <Body1>{children}</Body1>
    </div>
  )
}

export default Square