import { useState } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'
import Navigate from './Navigate'

const Callbacks = () => {
  const [animateBus, setAnimateBus] = useState({})
  const [animateTrainBerlin, setAnimateTrainBerlin] = useState({})
  const [animateTrainHannover, setAnimateTrainHannover] = useState({})
  const [animateTrainHamburg, setAnimateTrainHamburg] = useState({})
  const [animateTrainMunich, setAnimateTrainMunich] = useState({})

  const busMoving = (cb) => {
    setTimeout(() => {
      setAnimateBus({ animation: 'moveBus 3s ease-in-out 1s forwards' })
      cb()
    }, 3000)
  }

  const trainMoving = () => {
    setTimeout(() => {
      setAnimateTrainBerlin({ animation: `moveTrain 3s ease-in 1s forwards` })
    }, 3000)
    setTimeout(() => {
      setAnimateTrainHannover({ animation: `moveTrain 3s ease-in 1s forwards` })
    }, 2000)
    setTimeout(() => {
      setAnimateTrainHamburg({ animation: `moveTrain 3s ease-in 1s forwards` })
    }, 4000)
    setTimeout(() => {
      setAnimateTrainMunich({ animation: `moveTrain 3s ease-in 1s forwards` })
    }, 2500)
  }

  const clickOnBus = () => {
    busMoving(trainMoving)
  }

  return (
    <div className='start'>
      <h1>Threading Problem!</h1>
      <section className='text'>
        <p>Congrats you hacked the System. 🥷</p>
        <p>
          By using "callBack function", you manipulated the trainTravelPlan to
          wait until the bus arrives.
        </p>
        <p>
          and that simply happens by calling "trainTravelPlan func" inside the
          "busTravelPlan func". ♻️
        </p>
        <p>
          and because javascript is a single Threading language so it needs to
          finish "busTravelPlan func" and then start with "trainTravelPlan func"
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
            <div className='bus-image-container' style={animateBus}>
              <img
                onClick={clickOnBus}
                className='trans-image trans-image-bus'
                src={busImg}
                alt='bus'
              />
            </div>
          </div>
          <div className='train'>
            <div className='train-image-container' style={animateTrainBerlin}>
              <p>Berlin</p>
              <img
                className='trans-image trans-image-train'
                src={trainImg}
                alt='train'
              />
            </div>
            <div className='train-image-container' style={animateTrainHannover}>
              <p>Hannover</p>
              <img
                className='trans-image trans-image-train'
                src={trainImg}
                alt='train'
              />
            </div>
            <div className='train-image-container' style={animateTrainHamburg}>
              <p>Hamburg</p>
              <img
                className='trans-image trans-image-train'
                src={trainImg}
                alt='train'
              />
            </div>
            <div className='train-image-container' style={animateTrainMunich}>
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
      <pre className='code'>
        {`
// by clicking on the bus you'll Start StartTrip func
// which will call only one func this time 
// BusTravelPlan func will start the bus.
// and then will call TrainTravelPlan func.
// which will start the trains plans after finishing the bus plan.
// the bus will leave in 3 sec
// but this time the trains will wait till the bus arrives.

        function BusTravelPlan (cb) = {
// busIsLeaving will start the animation of the bus
          setTimeout(() => {
            busIsLeaving()
            cb()
          }, 3000)
        }

        function trainTravelPlan () = {
// trainIsLeaving will start the animation of the bus after 5 sec 
          setTimeout(() => {
            trainIsLeaving()
          }, 3000)
        }

        function StartTrip () = {
// This time trainTravelPlan is called inside busTravelPlan 
// as a callback function 
          busTravelPlan(trainTravelPlan)
        }
  `}
      </pre>
      <Navigate pre={''} next={'promises'} />
    </div>
  )
}

export default Callbacks
