// Code
import React from 'react';
import styled from 'styled-components'

const Comp = styled.code`
  font-family: 'Ubuntu Mono', monospace;
`
const Code = ({ code }) => {
  return <Comp>{code}</Comp>
}
export default Code
