import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Navigate from './Navigate'

const Asynchronous = ({ info, setInfo, sp }) => {
  const { pathname } = useLocation()

  let activeClassName = 'nav-active'

  return (
    <div className='start'>
      <nav className='nav'>
        <NavLink
          to={'promises'}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Promises
        </NavLink>
        <NavLink
          to={'async'}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Async / Await
        </NavLink>
      </nav>
      <div className='container'>
        <Outlet />
        {pathname === '/asynchronous' && (
          <div>
            <section className='text'>
              <p>Now we have a new problem we have stopped all trains! 🥴</p>
              <p>
                as mentioned before javascript is a single Threading language so
                it needs to finish and then start with {sp('trainTravelPlan')}
              </p>
              <p>
                By using "callBack function", you manipulated the{' '}
                {sp('trainTravelPlan')} to wait until the bus arrives.
              </p>
              <p>
                and that simply happens by calling {sp('trainTravelPlan')}{' '}
                inside the
                {sp('busTravelPlan')}. ♻️
              </p>

              <p>
                Now we created a new problem, all trains must wait til the bus
                arrives, and that is the problem of synchronous programming.⏱️
              </p>
              <p>
                but wait we can use the power of the Browser to solve this
                issue. since Browsers have access to our machine memory they can
                save some functions on the stack to be resolved later when then
                condition is fulfilled
              </p>
              <p>
                so can delay {sp('trainTravelPlan')} until {sp('busTravelPlan')}{' '}
                is fulfilled.
              </p>
              <p>
                we need a promise from berlin train, that it is not leaving
                until the bus arrives
              </p>
              <p>While other trains can continue their plans as usual</p>
              <p>Click on Promises to see how it's done 🤏</p>
            </section>
          </div>
        )}
        <Navigate pre={'callbacks'} next={'httpRequests'} />
      </div>
    </div>
  )
}

export default Asynchronous
