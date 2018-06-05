import React from 'react'
import styled from 'styled-components'
import styles from './style.css'
// import classNames from 'classnames'
import PropTypes from 'prop-types'
import { yellow } from 'logger'

const ChildrenWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 0 5px;
`

const ChildWrapper = styled.span`
  margin-left: ${props => props.index > 1 ? '10px' : 'inherit' };
  font-size: ${props => typeof props.c === 'string' ? '1.3em' : '1em'}
`
const Button = styled.button`
  color: #fff;
  background-color: #17a2b8;
  border: 1px solid transparent;
  border-color: #17a2b8;
  border-radius: 0.25rem;
  display: inline-block;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 0.375rem 0.75rem;
  text-align: center;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  vertical-align: middle;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  &:hover {
    color: #fff;
    background-color: #138496;
    border-color: #117a8b;
  }
  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);
  }
  &:disabled {
    opacity: 0.65;
    color: #fff;
    background-color: #17a2b8;
    border-color: #17a2b8;
  }
  &:not(:disabled) {
    cursor: pointer;
  }
  &:not(:disabled):not(.disabled):active {
    background-image: none;
    color: #fff;
    background-color: #117a8b;
    border-color: #10707f;
  }

`
/*
&:hover {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }
*/

const ButtonOld = (props) => {
  // const btnStyle = classNames({
  //   [styles.btn]: true,
  //   [styles.btnDefault]: props.default,
  //   [styles.btnGreen]: props.green,
  //   [styles.btnBlue]: props.blue,
  //   [styles.btnAmber]: props.amber,
  //   [styles.btnRed]: props.red,
  // })
  // yellow('children', props.children)
  const newChildren = props.children.map((c, index) => {
    // const childStyle = classNames({
    //   [styles.childMargin]: index > 0,
    //   [styles.buttonText]: typeof c === 'string',
    // })
    return (
      // <span
      //   className={childStyle} key={index}
      // >
      //   {c}
      // </span>
      <ChildWrapper index c key={index}>{c}</ChildWrapper>
    )
  })
  return (
    <Button>
      <ChildrenWrapper>{newChildren}</ChildrenWrapper>
    </Button>
  )
}

export default Button
