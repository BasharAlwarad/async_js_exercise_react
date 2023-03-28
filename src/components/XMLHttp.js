import { useState, useEffect } from 'react'
import { NavLink, Outlet, useLocation } from 'react-router-dom'
import Navigate from './Navigate'

const XMLHttp = () => {
  const { pathname } = useLocation()
  let activeClassName = 'nav-active'

  const [pokeList, setPokeList] = useState([])

  // promises
  const pokePromise = new Promise((resolve, reject) => {
    let pokes = fetch('https://pokeapi.co/api/v2/pokemon?offset=40&limit=20')
    resolve(pokes.then((res) => res.json()))
    reject(pokes.catch((er) => console.error(er)))
  })

  useEffect(() => {
    pokePromise
      .then(({ results }) => setPokeList(results))
      .catch(Error('ERROR: 404 NOT FOUND 😞'))
  }, [])
  console.log(pokeList)
  return (
    <div className='start'>
      <nav className='nav'>
        <NavLink
          to='XMLHttpRequest'
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
        {pathname === '/httpRequests' && <div>Hello</div>}

        <Outlet />
        <Navigate pre={'asynchronous'} next={''} />
      </div>
    </div>
  )
}

export default XMLHttp
