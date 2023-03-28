import React from 'react'

const Fetch = () => {
  return (
    <div>
      <h1>Fetch!</h1>
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
    </div>
  )
}

export default Fetch
