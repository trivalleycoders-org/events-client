import React from 'react'
import styled from 'styled-components'

const Paragraph = styled.p`
  ${({ size }) => {
    if (size) {
      return `
        font-size: ${size}px;
      `
    } else {
      return `
        font-size: inherit;
      `
    }
  }}
`

const P = ({ size, children }) => {
    return (
      <Paragraph size={size}>{children}</Paragraph>
    )

}
export default P