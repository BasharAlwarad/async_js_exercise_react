import { NavLink, Outlet, useLocation, Link } from 'react-router-dom'
import Navigate from './Navigate'

const XMLHttp = ({ sp }) => {
  const { pathname } = useLocation()
  let activeClassName = 'nav-active'
  return (
    <div className='start'>
      <nav className='nav'>
        <NavLink
          to='XMLHttpRequests'
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          XMLHttpRequest
        </NavLink>
        <NavLink
          to={'fetch'}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Fetch
        </NavLink>
        <NavLink
          to={'axios'}
          className={({ isActive }) => (isActive ? activeClassName : undefined)}
        >
          Axios
        </NavLink>
      </nav>
      <div className='container'>
        {pathname === '/httpRequests' && (
          <div>
            <section className='text'>
              <p>
                So far we have been imagining the Bus-train scenario to
                manufacture a {sp('synchronous')} problem that requires an{' '}
                {sp('asynchronous')} solution.
              </p>
              <p>
                While in reality, we'll face this problem all the time when we
                try to {sp('fetch')} data from a server or any external source
                "such as another computer".
              </p>
              <p>
                Since fetching data require some time due to internet speed,
                bandwidth, server-processing speed, and many other issues, these
                issues will certainly lead to unsynchronized processing of the
                incoming data.
              </p>
              <p>
                and again by using the {sp('Promise', 'blue')} constructor we
                can {sp('synchronize')} the timing of {sp('fetching')} data from
                a server with processing this data.
              </p>
              <p>
                But we still have one little thing to worry about. how to{' '}
                {sp('fetch')}
                data from a server?
              </p>
              <p>
                Click 🤏{' '}
                <Link to={`${window.location.origin}/asynchronous/async`}>
                  XMLHttpRequest
                </Link>{' '}
                to see how it's done!
              </p>
            </section>
          </div>
        )}

        <Outlet />
        <Navigate pre={'asynchronous'} next={''} />
      </div>
    </div>
  )
}

export default XMLHttp
