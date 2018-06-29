import React from 'react'

const style = {
  color: 'white',
}

const ShowValues = ({ values }) => {
  console.log('values', values)
  return (
    <div>
      <pre style={style}>
        {JSON.stringify(values, null, 4)}
      </pre>
    </div>
  )
}

export default ShowValues