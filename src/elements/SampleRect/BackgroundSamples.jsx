import React from 'react'
import { colorList, grayBackground, whiteBackground } from '../colors'


const BackgroundSamples = () => {

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
export default BackgroundSamples