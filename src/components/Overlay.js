import { useState, useEffect } from 'react'
import Cookie from 'js-cookie'

const Overlay = () => {
  const setCookie = (cookieName, userin) => {
    Cookie.set(cookieName, userin, {
      expires: 1,
      secure: true,
      sameSite: 'strict',
      path: '/',
    })
  }
  const getCookie = (cookieName) => {
    return Cookie.get(cookieName)
  }

  const [show, setShow] = useState(
    getCookie('asyncPrimerConfirmed')
      ? { display: 'none' }
      : { display: 'flex' }
  )

  const hide = () => {
    setCookie('asyncPrimerConfirmed')
    setShow({ display: 'none' })
  }

  return (
    <div className='overlay' style={show}>
      <h2>To start learning about async javascript</h2>
      <h2>you should be familiar with few concepts first </h2>
      <p>Browser Parsing</p>
      <p>Hoisting</p>
      <p>Scope</p>
      <p>Blocking</p>
      <p>Fundamentals of Javascript such as </p>
      <p>variables, functions, conditionals, etc </p>
      <button className='overlay-btn' onClick={hide}>
        Start
      </button>
    </div>
  )
}

export default Overlay
