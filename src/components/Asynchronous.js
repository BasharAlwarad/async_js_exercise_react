import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Navigate from './Navigate'

const Asynchronous = ({ info, setInfo }) => {
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
        {pathname === '/asynchronous' && <div>Hello</div>}
        <Navigate pre={'callbacks'} next={'httpRequests'} />
      </div>
    </div>
  )
}

export default Asynchronous
