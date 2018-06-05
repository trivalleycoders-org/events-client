// Callout
import React from 'react'
import styled from 'styled-components'

const Base = styled.div`
  background-color: rgb(100, 100, 100);
  border: 1px solid rgb(75, 75, 75);
  border-left-width: 5px;
  border-radius: 3px;
  margin: 20px 0;
  padding: 20px;
  text-shadow: 0 0 0 black;


`
// &p:last-child {
//   margin-bottom: 0px;
// }
const Danger = Base.extend`
  background-color: rgb(242, 222, 222);
  border-left-color: #ce4844;
  color: black;
`

const Warning = Base.extend`
  background-color: #fff9cc;
  border-left-color: #ffe202;
  color: black;
`

const Goal = Base.extend`
  border-left-color: #008000;
  color: white;
  margin: 20px 0;
  padding: 20px;
`

const Info = Base.extend`
  background-color: #3a84e0;
  border-left-color: #127fe1;
  margin: 20px 0;
  padding: 20px;
`

const Callout = ({ danger, warning, goal, info, title, children }) => {

  const renderCallout = () => {
    switch (true) {
      case danger:
        return <Danger>{children}</Danger>
      case warning:
        return <Warning>{children}</Warning>
      case goal:
        return <Goal>{children}</Goal>
      case info:
        return <Info>{children}</Info>
      default:
        return <Base>{children}</Base>
    }
  }

  return (
    <div>
      <h4>{title}</h4>
      {renderCallout()}
    </div>
  )

}

export default Callout;
