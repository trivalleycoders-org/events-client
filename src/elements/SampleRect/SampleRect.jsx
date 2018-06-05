import React from 'react'
import styled from 'styled-components'
// margin: 20px;
const Rect = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  ${({ height, width, bgColor, fontColor }) => {
    // console.log('bgColor', bgColor)
    return `
      height: ${height || '50'}px;
      width: ${width || '110'}px;
      background-color: ${bgColor || '#2F363D'};
      color: ${fontColor || 'white'};
    `
    }
  }
`

const SampleRect = ({ fontColor, bgColor, height, width, children }) => {
  return (
    <Rect
      fontColor={fontColor}
      bgColor={bgColor}
      height={height}
      width={width}
    >
      {children}
    </Rect>
  )
}
export default SampleRect