import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Problem from './components/Problem'
import Callback from './components/Callback'
import Asynchronous from './components/Asynchronous'
import XMLHttp from './components/XMLHttp'
import Overlay from './components/Overlay'
import Fetch from './components/Fetch'
import Error from './components/Error'
import Axios from './components/Axios'
import XMLHttpRequest from './components/XMLHttpRequest'
import Promises from './components/Promises'
import Async from './components/Async'

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Overlay />
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Problem />} />
            <Route path='/callbacks' element={<Callback />} />
            <Route path='/asynchronous' element={<Asynchronous />}>
              <Route path='promises' element={<Promises />} />
              <Route path='async' element={<Async />} />
            </Route>
            <Route path='/httpRequests' element={<XMLHttp />}>
              <Route path='XMLHttpRequest' element={<XMLHttpRequest />} />
              <Route path='fetch' element={<Fetch />} />
              <Route path='axios' element={<Axios />} />
              <Route path='*' element={<Error />} />
            </Route>
            <Route path='dashboard' element={<Navigate to='/' />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
