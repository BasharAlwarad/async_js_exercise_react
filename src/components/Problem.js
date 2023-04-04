import { useState, useEffect } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'
import Navigate from './Navigate'
import CountDown from './shared/CountDown'

const Start = ({
  countDown,
  setCountDown,
  startCountDown,
  sp,
  animation,
  setAnimation,
  startAnimations,
}) => {
  const { bus, berlin, hamburg, munich } = animation

  const busMoving = () => {
    startAnimations('bus', '3000')
  }

  const trainMoving = () => {
    startAnimations('berlin', '3000')
    startAnimations('hamburg', '2000')
    startAnimations('munich', '2500')
  }

  const clickOnBus = () => {
    busMoving()
    trainMoving()
    startCountDown()
  }

  useEffect(() => {
    setAnimation({
      bus: {},
      berlin: {},
      hamburg: {},
      munich: {},
    })
    setCountDown(3)
  }, [])

  useEffect(() => {}, [countDown])

  return (
    <div className='start'>
      <h1>Threading Problem!</h1>
      <section className='text'>
        <p>
          You need to travel to Berlin, and you must take the bus to the trains
          station. 🤔
        </p>
        <p>
          the bus will leave after 3 minutes, while the train is also leaving
          after 3 minutes.
        </p>
        <p>So you can't catch Berlin-train on time. 😥</p>
        <p>Click on the bus to start! 🤏</p>
      </section>
      <section className='demo'>
        <div className='transport'>
          <div className='bus'>
            <div className='bus-image-container' style={bus}>
              <CountDown countDown={countDown} />
              <img
                onClick={clickOnBus}
                className='trans-image trans-image-bus'
                src={busImg}
                alt='bus'
              />
            </div>
          </div>
          <div className='train'>
            <div className='train-image-container' style={berlin}>
              <p>Berlin</p>
              <img
                className='trans-image trans-image-train'
                src={trainImg}
                alt='train'
              />
            </div>
            <div className='train-image-container' style={hamburg}>
              <p>Hamburg</p>
              <img
                className='trans-image trans-image-train'
                src={trainImg}
                alt='train'
              />
            </div>
            <div className='train-image-container' style={munich}>
              <p>Munich</p>
              <img
                className='trans-image trans-image-train'
                src={trainImg}
                alt='train'
              />
            </div>
          </div>
        </div>
      </section>
      <div className='code'>
        <pre className='code-pre'>
          <div className='func-container'>
            {sp('function', 'blue')}
            {sp('busTravelPlan')}() = {'{'}
            <br />
            <pre>
              {'  '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'    '}
              {sp('busIsLeaving')}()
              <br />
              {'  '}
              {'}, '}
              {sp('3000', 'blue')}
              {')'}
              <br />
              {'}'}
            </pre>
          </div>
          <div className='func-container'>
            {sp('function', 'blue')}
            {sp('trainsTravelPlan')}() = {'{'}
            <br />
            <pre>
              {'  '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'    '}
              {sp('berlinIsLeaving')}()
              <br />
              {'  '}
              {'}, '}
              {sp('3000', 'blue')}
              {')'}
              <br />
              {'  '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'    '}
              {sp('hamburgIsLeaving')}()
              <br />
              {'  '}
              {'}, '}
              {sp('2000', 'blue')}
              {')'}
              <br />
              {'  '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'    '}
              {sp('munichIsLeaving')}()
              <br />
              {'  '}
              {'}, '}
              {sp('2500', 'blue')}
              {')'}
              <br />
              {'}'}
            </pre>
          </div>
          <div className='func-container'>
            {sp('function', 'blue')}
            {sp('StartTrip')}() = {'{'}
            <br />
            <pre>
              {'    '}
              {sp('busTravelPlan')} ()
              <br />
              {'    '}
              {sp('trainsTravelPlan')} ()
              <br />
              {'}'}
              <br />
              <br />
              {sp('StartTrip')} ()
              <br />
            </pre>
          </div>
        </pre>
        <ol className='inst-list'>
          <li>
            by clicking on the bus you'll call {sp('StartTrip')}, which will
            call two functions.
          </li>
          <li>
            {sp('TrainsTravelPlan')}
            will start the train.
          </li>
          <li>
            {sp('BusTravelPlan')}
            will start the bus. the bus is arriving in 3 sec.
          </li>
          <li>but the train to Berlin is leaving after 3 sec as well.</li>
          <li>
            (NOTE)
            {sp('berlinIsLeaving')},{sp('hamburgIsLeaving')},
            {sp('munichIsLeaving')}, and {sp('busIsLeaving')}
            are prebuild functions.
            <br />
            those functions will display the animation for the bus and the
            trains
          </li>
        </ol>
      </div>

      <Navigate pre={'httpRequests'} next={'callbacks'} />
    </div>
  )
}

export default Start
