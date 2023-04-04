import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'
import CountDown from './shared/CountDown'

const Async = ({
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
    const asyncBusToBerlinTrain = async () => {
      await busMoving()
      startAnimations('berlin', '3000')
    }
    asyncBusToBerlinTrain()
    startAnimations('hamburg', '3000')
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
      <h1>Async/Await</h1>
      <section className='text'>
        <p>
          As in Promises previously we need a {sp('Promise', 'blue')} from
          berlin train, that it is not leaving until the bus arrives
        </p>
        <p>
          in other words we need to {sp('asynchronous')} the{' '}
          {sp('busTravelPlan')} and the {sp('berlinIsLeaving')}
        </p>
        <p>
          which means{sp('berlinIsLeaving')} will {sp('await')} the{' '}
          {sp('busTravelPlan')}
        </p>
        <p>While other trains can continue their plans as usual</p>
        <p>so we should use {sp('Promise', 'blue')} constructor again.</p>
        <p>
          the only deference this time that we will use {sp('async await')}
          instead of {sp('then')} to fulfill the {sp('Promise', 'blue')}.
        </p>
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
              {'   '}
              {sp('const', 'red')}
              {sp('asyncBusToBerlin')}={sp('async', 'red')}() {'{'}
              <br />
              {'          '}
              {sp('await', 'red')}
              {sp('busTravelPlan')}()
              <br />
              {'            '}
              {sp('setTimeOut', 'blue')}
              {'(() => {'}
              <br />
              {'              '}
              {sp('berlinIsLeaving')}()
              <br />
              {'              '}
              {'}, '}
              {sp('3000', 'blue')}
              {')'}
              <br />
              {'          '}
              {'}'}
              <br />
              {'  '}
              {sp('asyncBusToBerlin')}()
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
          <li>Normally this will lead tp blocking problem as in Callbacks</li>
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
            The {sp('async await', 'red')} operators work as an EventListener
            and will listen to the changes in Browser Stack, when the condition
            of {sp('busTravelPlan')}
            is fulfilled then it will call the promised function which in this
            case {sp('berlinIsLeaving')}.
          </li>
          <li>
            Although the function will work perfectly we are still missing a
            proper way to catch Errors. for that we will use{' '}
            {sp('try catch', 'red')} operators
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Async
