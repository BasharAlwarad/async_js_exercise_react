import { useState } from 'react'
import busImg from '../images/bus.png'
import trainImg from '../images/train.png'

const Promises = () => {
  const [animateBus, setAnimateBus] = useState({})
  const [animateTrainBerlin, setAnimateTrainBerlin] = useState({})
  const [animateTrainHannover, setAnimateTrainHannover] = useState({})
  const [animateTrainHamburg, setAnimateTrainHamburg] = useState({})
  const [animateTrainMunich, setAnimateTrainMunich] = useState({})

  const busMoving = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setAnimateBus({ animation: 'moveBus 3s ease-in-out 1s forwards' })
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
      .then(() =>
        setTimeout(() => {
          setAnimateTrainBerlin({
            animation: `moveTrain 3s ease-in 1s forwards`,
          })
        }, 3000)
      )
      .catch((er) => console.error(er))

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
    trainMoving()
  }

  return (
    <div className='start'>
      <h1>Promises</h1>
      <section className='text'>
        <p>
          To solve this problem you require a promise from Berlin-train only to
          wait until our bus arrives
        </p>
        <p>so you should use "Promise" constructor as following.</p>
        <p>
          This way we can use the power of the browser to solve the problem of
          Threading by adding functions to the stack of the browser to be
          resolved later on when the conditions are met.
        </p>
        <p>"like when the data are fetched from the server"</p>
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
// by clicking on the bus you'll StartTrip func
// which will call one func only this time 
// TrainTravelPlan func will start the trains.
// But this time ,by using Promise, in BusTravelPlan 
// 

        function BusTravelPlan () = {
// busIsLeaving will start the animation of the bus
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              busIsLeaving()
              const error = false
              if (!error) {
                resolve()
              } else {
                reject('ERROR: Something went wrong!')
              }
            }, 3000)
          })
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
    </div>
  )
}

export default Promises
