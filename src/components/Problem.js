import { useState } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'
import Navigate from './Navigate'

const Start = () => {
  const [animateBus, setAnimateBus] = useState({})
  const [animateTrainBerlin, setAnimateTrainBerlin] = useState({})
  const [animateTrainHannover, setAnimateTrainHannover] = useState({})
  const [animateTrainHamburg, setAnimateTrainHamburg] = useState({})
  const [animateTrainMunich, setAnimateTrainMunich] = useState({})

  const busMoving = () => {
    setTimeout(() => {
      setAnimateBus({ animation: 'moveBus 3s ease-in 1s forwards' })
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
    busMoving()
    trainMoving()
  }

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
          after 3 minutes. 😥
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
// by clicking on the bus you'll start StartTrip func.
// which will call two funcs.
// TrainTravelPlan func will start the train.
// BusTravelPlan func will start the bus.
// the bus is arriving in 3 sec.
// but the train to Berlin is leaving after 3 sec as well.

        function BusTravelPlan () = {
// busIsLeaving will start the animation of the bus 
          setTimeout(() => {
            busIsLeaving()
          }, 3000)
        }

        function trainTravelPlan () = {
// busIsLeaving will start the animation of the bus after 5 sec 
          setTimeout(() => {
            trainIsLeaving()
          }, 3000)
        }
        
        function StartTrip () = {
          trainTravelPlan()
          busTravelPlan()
        }
  `}
      </pre>

      <Navigate pre={'httpRequests'} next={'callbacks'} />
    </div>
  )
}

export default Start
