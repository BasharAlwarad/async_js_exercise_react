import { useEffect } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'
import Navigate from './Navigate'
import CountDown from './shared/CountDown'

const Callbacks = ({
  countDown,
  setCountDown,

  startCountDown,
  startAnimations,
  animation,
  sp,
  setAnimation,
}) => {
  const { bus, berlin, hamburg, munich } = animation

  const busMoving = (cb) => {
    setTimeout(() => {
      setAnimation((pre) => ({
        ...pre,
        bus: {
          animation: `moveBus 3s ease-in 1s forwards`,
        },
      }))
      cb()
    }, 3000)
  }
  const trainMoving = () => {
    startAnimations('berlin', '3000')
    startAnimations('hamburg', '2000')
    startAnimations('munich', '2500')
  }

  const clickOnBus = () => {
    busMoving(trainMoving)
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
      <h1>Threading Problem!</h1>
      <section className='text'>
        <p>Congrats you hacked the train-station System. 🥷</p>
        <p>
          By using "callBack function", you manipulated the{' '}
          {sp('TrainsTravelPlan')}
          to wait until the bus arrives.
        </p>
        <p>
          and that simply happens by calling {sp('TrainsTravelPlan')}
          inside the
          {sp('busTravelPlan')}. ♻️
        </p>
        <p>
          and because javascript is a single Threading language so it needs to
          finish {sp('busTravelPlan')} and then start with
          {sp('trainsTravelPlan')}
        </p>
        <p>
          But we have a new problem, Now all trains must wait til the bus
          arrives And that is the problem of synchronous programming.⏱️
        </p>
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
            {sp('busTravelPlan')}(cb) = {'{'}
            <br />
            <pre>
              {'  '}
              {sp('steTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'    '}
              {sp('busIsLeaving')}()
              <br />
              {'    '}
              {sp('cb')}()
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
              {sp('busTravelPlan')}(trainsTravelPlan)
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
          <li>which will call only one func this time {sp('BusTravelPlan')}</li>
          <li>{sp('BusTravelPlan')} will start the bus.</li>
          <li>and then will call {sp('TrainsTravelPlan')}.</li>
          <li>
            which will start the trains plans after finishing the bus plan.
          </li>
          <li>the bus will leave in 3 sec</li>
          <li>but this time the trains will wait till the bus arrives.</li>
        </ol>
      </div>
      <Navigate pre={''} next={'promises'} />
    </div>
  )
}

export default Callbacks
