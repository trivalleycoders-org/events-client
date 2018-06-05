import React from 'react'
import styled from 'styled-components'
import { colorList, grayBackground, whiteBackground } from '../colors'

const DarkRect = styled.div`
  background-color: ${grayBackground};
  height: 50px;
  margin: 20px;
  width: 100px;
  ${({ color }) => {
    return `color: ${color};`
    }
  }
  }
`
const LightRect = styled.div`
  background-color: ${whiteBackground};
  margin: 20px;
  height: 50px;
  width: 100px;
  ${({ color }) => {
    return `color: ${color};`
    }
  }
  }
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const ColorRect = () => {

  const rects = colorList.map((c, index) => {
    return <div>
      <Wrapper>
        <DarkRect key={index} color={c.rgb}>{c.name}</DarkRect>
        <LightRect key={index} color={c.rgb}>{c.name}</LightRect>
      </Wrapper>
    </div>
  })
  return (
    <div>
      {rects}
    </div>
  )
}
export default ColorRect