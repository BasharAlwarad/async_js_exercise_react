import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Problem from './components/Problem'
import Callback from './components/Callback'
import Asynchronous from './components/Asynchronous'
import XMLHttp from './components/XMLHttp'
import Overlay from './components/Overlay'
import Fetch from './components/Fetch'
import Error from './components/Error'
import Axios from './components/Axios'
import XMLHttpRequests from './components/XMLHttpRequests'
import Promises from './components/Promises'
import Async from './components/Async'

function App() {
  const [countDown, setCountDown] = useState(3)
  const [animation, setAnimation] = useState({
    bus: {},
    berlin: {},
    hamburg: {},
    munich: {},
  })

  const startCountDown = () => {
    let i = 3

    const timerInterval = setInterval(() => {
      setCountDown((pre) => pre - 1)
      i--
      if (i === 0) {
        clearInterval(timerInterval)
      }
    }, 1000)
  }

  const startAnimations = (e, t) => {
    setTimeout(() => {
      setAnimation((pre) => ({
        ...pre,
        [e]: {
          animation: `${
            e === 'bus' ? 'moveBus' : 'moveTrain'
          } 3s ease-in 1s forwards`,
        },
      }))
    }, t)
  }

  const sp = (e = 'function', c) => {
    return (
      <span className='func-name' style={{ color: c }}>
        {' '}
        {e}{' '}
      </span>
    )
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Overlay />
        <Navbar />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <Problem
                  startAnimations={startAnimations}
                  startCountDown={startCountDown}
                  countDown={countDown}
                  setCountDown={setCountDown}
                  animation={animation}
                  setAnimation={setAnimation}
                  sp={sp}
                />
              }
            />
            <Route
              path='/async_js_exercise_react'
              element={
                <Problem
                  startAnimations={startAnimations}
                  startCountDown={startCountDown}
                  countDown={countDown}
                  setCountDown={setCountDown}
                  animation={animation}
                  setAnimation={setAnimation}
                  sp={sp}
                />
              }
            />
            <Route
              path='/callbacks'
              element={
                <Callback
                  startAnimations={startAnimations}
                  startCountDown={startCountDown}
                  countDown={countDown}
                  setCountDown={setCountDown}
                  animation={animation}
                  setAnimation={setAnimation}
                  sp={sp}
                />
              }
            />
            <Route path='/asynchronous' element={<Asynchronous sp={sp} />}>
              <Route
                path='promises'
                element={
                  <Promises
                    startAnimations={startAnimations}
                    startCountDown={startCountDown}
                    setCountDown={setCountDown}
                    countDown={countDown}
                    animation={animation}
                    setAnimation={setAnimation}
                    sp={sp}
                  />
                }
              />
              <Route
                path='async'
                element={
                  <Async
                    startAnimations={startAnimations}
                    startCountDown={startCountDown}
                    countDown={countDown}
                    setCountDown={setCountDown}
                    animation={animation}
                    setAnimation={setAnimation}
                    sp={sp}
                  />
                }
              />
            </Route>
            <Route path='/httpRequests' element={<XMLHttp sp={sp} />}>
              <Route
                path='XMLHttpRequests'
                element={<XMLHttpRequests sp={sp} />}
              />
              <Route path='fetch' element={<Fetch sp={sp} />} />
              <Route path='axios' element={<Axios sp={sp} />} />
              <Route path='*' element={<Error />} />
            </Route>
            <Route path='dashboard' element={<Navigate to='/' />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
