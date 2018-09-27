import React from 'react'

const style = {
  color: 'white',
}

const ShowValues = ({ values }) => {
  return (
    <div>
      <pre style={style}>
        {JSON.stringify(values, null, 4)}
      </pre>
    </div>
  )
}

export default ShowValues