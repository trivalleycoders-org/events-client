import React from 'react'

const Chevron5Svg = ({
  color='black',
  width,
  opacity=1,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 7.4099998 12"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      externalResourcesRequired="http://purl.org/dc/dcmitype/StillImage"
      style={{
        width: width
      }}
      id="svg6"
    >
      <defs
        id="defs10"
      />
      <path
        style={{ fill: color }}
        id="path2"
        d="M 1.41,0 0,1.41 4.58,6 0,10.59 1.41,12 l 6,-6 z"
      />
      <path
        style={{
          fill: 'none'
        }}
        id="path4"
        d="m -8.59,-6 h 24 v 24 h -24 z"
      />
    </svg>
  )
}

export default Chevron5Svg