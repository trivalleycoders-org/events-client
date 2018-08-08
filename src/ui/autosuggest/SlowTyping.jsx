import React from 'react'

/* Dev */
// eslint-disable-next-line
import { green } from 'logger'

class SlowTyping extends React.Component {
  state = {
    currentValue: ''
  }
  handleChange = (event) => {
    // event.persist()
    let timeout = null;
    const val = event.target.value
    
    this.setState({
      currentValue: val,
    })
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      green('val', val)
      green('currentVal', this.state.currentValue)
    }, 500)
  }
  handleKeyUp = (event) => {
    event.persist()
    let timeout = null;
    green('event', event.target.value)
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      green('value', event.target.value)
      
    }, 500)
    
  }
  render() {
    return (
      <div>
        <p>{this.state.currentValue}</p>
        <input 
          type='text' 
          name='slow'
          onChange={this.handleChange}
          // onKeyUp={this.handleKeyUp}
        />
      </div>
    )
  }
}

export default SlowTyping

/* Reference
   https://schier.co/blog/2014/12/08/wait-for-user-to-stop-typing-using-javascript.html
*/