import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'
import CountDown from './shared/CountDown'

const Promises = ({
  countDown,
  setCountDown,

  startCountDown,
  startAnimations,
  animation,
  setAnimation,
  sp,
}) => {
  const { bus, berlin, hamburg, munich } = animation

  const busMoving = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setAnimation((pre) => ({
          ...pre,
          bus: {
            animation: `moveBus 3s ease-in 1s forwards`,
          },
        }))
        const error = false
        if (!error) {
          resolve()
        } else {
          reject(`ERROR: Something went wrong!`)
        }
      }, 3000)
    })
  }

  const trainMoving = () => {
    busMoving()
      .then(() => startAnimations('berlin', '3000'))
      .catch((er) => console.error(er))
    startAnimations('hamburg', '2000')
    startAnimations('munich', '2500')
  }

  const clickOnBus = () => {
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

  return (
    <div className='start'>
      <h1>Promises</h1>
      <section className='text'>
        <p>
          we need a promise from berlin train, that it is not leaving until the
          bus arrives
        </p>
        <p>While other trains can continue their plans as usual</p>
        <p>so we should use {sp('Promise', 'blue')} constructor.</p>
        <p>Click 🤏 on the bus to start!</p>
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
              {sp('return', 'red')}
              {sp('new', 'red')}
              {sp('Promise', 'blue')}((resolve, reject) {'=>'} {'{'}
              <br />
              {'    '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'      '}
              {sp('busIsLeaving')}()
              <br />
              {'      '}
              {sp('resolve')}()
              <br />
              {'      '}
              {sp('reject')}('ERROR: Promise not fulfilled')
              <br />
              {'     '}
              {'}, '}
              {sp('3000', 'blue')}
              {')'}
              <br />
              {'   '}
              {'})'}
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
              {sp('busTravelPlan')}()
              <br />
              {'   '}
              {'.'}
              {sp('then')}
              {'(() => {'}
              <br />
              {'      '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'        '}
              {sp('berlinIsLeaving')}()
              <br />
              {'      '}
              {'}, '}
              {sp('3000', 'blue')}
              {'))'}
              <br />
              {'   '}
              {'.'}
              {sp('catch')}
              {'((error) => {'}
              <br />
              {'      '}
              {sp('console.error', 'blue')}
              {'(error)'}
              {'        '}
              <br />
              {'      '}
              {'}'}
              <br />
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
              {sp('trainTravelPlan')}()
              <br />
              {'}'}
              <br />
              <br />
              {sp('StartTrip')}()
              <br />
            </pre>
          </div>
        </pre>
        <ol className='inst-list'>
          <li>
            by clicking on the bus you'll call
            {sp('StartTrip')}.
          </li>
          <li>
            which will call only one func this time {sp('trainTravelPlan')}
          </li>
          <li>
            {sp('trainTravelPlan')} will call {sp('berlinIsLeaving')} first and
            then other trains functions.
          </li>
          <li>Normally this will lead to blocking problem as in Callbacks</li>
          <li>
            But this time, by using a Promise constructor inside{' '}
            {sp('busTravelPlan')} we can bound {sp('berlinIsLeaving')} to the{' '}
            {sp('Promise', 'blue')} in {sp('busTravelPlan')}
          </li>
          <li>
            In this case, Only the Berlin train will wait until the Bus arrives
            while other Trains can continue their plans as usual
          </li>
          <li>
            The {sp('then')} function works as an EventListener and will listen
            to the changes in the Browser Stack, when the condition of{' '}
            {sp('busTravelPlan')} is fulfilled then it will call the promised
            function which in this case {sp('berlinIsLeaving')}.
          </li>
          <li>
            The {sp('catch')} function works also as an EventListener and will
            listen to the changes in Browser Stack, when the condition of{' '}
            {sp('busTravelPlan')} is not fulfilled then it will throw a custom
            Error
          </li>
          <li>
            and finally 🤏
            <Link to={`${window.location.origin}/asynchronous/async`}>
              Async/Await
            </Link>{' '}
            works exactly the same, but with much more convenient!
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Promises
