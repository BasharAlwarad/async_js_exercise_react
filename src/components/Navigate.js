import { useNavigate } from 'react-router-dom'

const Navigate = ({ pre, next }) => {
  const navigate = useNavigate()

  return (
    <section className='navigate-sec'>
      <button onClick={() => navigate(`/${pre}`)}>Previous</button>
      <button onClick={() => navigate(`/${next}`)}>next</button>
    </section>
  )
}

export default Navigate
