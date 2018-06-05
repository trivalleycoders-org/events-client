import React from 'react'
import styled from 'styled-components'

const Line = styled.div`
    width: 1px;
    background-image: linear-gradient(to bottom, #F79533,#F37055,#EF4E7B,#A166AB,#5073B8,#1098AD,#07B39B,#6FBA82);
    background-image: linear-gradient(to right, #F79533,#F37055,#EF4E7B,#A166AB,#5073B8,#1098AD,#07B39B,#6FBA82);
    background-repeat: repeat-y;
    width: 100%;
    height: 1px;
`
//
const PageLine = ({ children }) => {
  return (
    <Line></Line>
  )
}
export default PageLine