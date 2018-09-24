import React from 'react'

const Square = ({ color, bgColor, children }) => {
  const style = {
    width: 200,
    height: 200,
    backgroundColor: bgColor,
    color: color,
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
  return (
    <div style={style}>
      <div>{children}</div>
    </div>
  )
}

export default Square