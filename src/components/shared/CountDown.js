import React from 'react'

const CountDown = ({ countDown }) => {
  const colorStyle = () => {
    switch (countDown) {
      case 2:
        return { color: 'yellow' }
      case 1:
        return { color: 'red' }
      default:
        return { color: 'green' }
    }
  }
  return (
    <div style={colorStyle()} className='count-down'>
      {countDown > 0 && countDown}
    </div>
  )
}

export default CountDown
