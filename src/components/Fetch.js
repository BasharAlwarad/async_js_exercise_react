import { Link } from 'react-router-dom'
import { useState } from 'react'

const Fetch = ({ sp }) => {
  const [pokeList, setPokeList] = useState([])

  const showPoke = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=40&limit=6`)
      .then((response) => response.json())
      .then((response) => setPokeList(response))
      .catch((error) => console.log(error))
  }

  return (
    <div className='start'>
      <h1>Fetch</h1>
      <section className='text'>
        <p>
          we sow before how much code do we need to right when using{' '}
          {sp('XMLHttpRequest', 'blue')} or XHR objects are used to interact
          with servers.
        </p>
        <p>
          The global {sp('fetch')} method starts the process of fetching a
          resource from the network, returning a promise which is fulfilled once
          the response is available.
        </p>
        <p>
          that will spare us from creating a {sp('Promise', 'blue')} and using{' '}
          {sp('resolve reject')}.
        </p>
        <p>
          since {sp('fetch')} returns a {sp('Promise', 'blue')} we can ably the{' '}
          {sp('then')} or {sp('async')}to resolve the {sp('Promise', 'blue')}{' '}
          and the {sp('catch')} or both {sp('try catch')} to catch an error.
        </p>
        <p>Click 🤏 Pokémons button!</p>
      </section>
      <section className='demo'>
        <div className='poke-container'>
          <div className='poke-button-container'>
            <button onClick={showPoke}>Pokémons</button>
          </div>
          <div className='poke-list'>
            {pokeList?.results?.map((e, i) => (
              <div key={i} className='poke-card'>
                <h2 className='poke-card-name'>{e.name}</h2>
                <img
                  style={{
                    width: '7rem',
                  }}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
                    i + 1
                  }.svg`}
                  alt={e.name}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className='code'>
        <pre className='code-pre'>
          <div className='func-container'>
            {sp('function', 'blue')}
            {sp('fetchPoke')}(url) = {'{'}
            <pre>
              {'  '}
              {sp('fetch')}
              {'(url)'}
              <br />
              {'    '}.{sp('then')}
              {'((response) => '}
              {sp('response', 'blue')}.{sp('json')}
              {'())'}
              <br />
              {'    '}.{sp('then')}
              {'((response) => {'}
              <br />
              {'      '}
              {sp('console', 'blue')}.{sp('log')}
              {'('}
              {sp('response', 'blue')}
              {')'}
              <br />
              {'      '}
              {'})'}
              <br />
              {'    '}.{sp('catch')}
              {'((error) => {'}
              <br />
              {'      '}
              {sp('console', 'blue')}.{sp('error')}
              {'(error)'}
              <br />
              {'      '}
              {'})'}
              <br />
              {'}'}
              <br />
              {sp('fetchPoke')}
              (`https://pokeapi.co/api/v2/pokemon?offset=40&limit=6`)
            </pre>
          </div>
          <div className='func-container'>
            {sp('async', 'red')}
            {sp('function', 'blue')}
            {sp('fetchPoke')}(url) = {'{'}
            <pre>
              {'  '}
              {sp('try', 'blue')} {'{'}
              <br />
              {'     '}
              {sp('const', 'blue')}
              {sp('response', 'blue')}
              {'='}
              {sp('await', 'red')}
              {sp('fetch')}
              {'(url)'}
              <br />
              {'     '}
              {sp('const', 'blue')}
              {sp('data', 'blue')}
              {'='}
              {sp('await', 'red')}
              {sp('response', 'blue')}.{sp('json')}
              {'()'}
              <br />
              {'   '}
              {'}'}
              {sp('catch', 'blue')} {'(error){'}
              <br />
              {'     '}
              {sp('console', 'blue')}.{sp('error')}
              {'(error)'}
              <br />
              {'      '}
              {'}'}
              <br />
              {'}'}
              <br />
              {sp('fetchPoke')}
              (`https://pokeapi.co/api/v2/pokemon?offset=40&limit=6`)
            </pre>
          </div>
        </pre>
        <ol className='inst-list'>
          <li>
            by clicking on 🤏 {sp('Pokémons')} Button you'll call{' '}
            {sp('fetchPoke')} function.
          </li>
          Those two similar function with two different syntax will give us the
          same value as in {sp('XMLHttpRequest', 'blue')}, but with much less
          code
          <li>
            So far we have all the required information to interact with servers
            in {sp('synchronized')} methods and we can make even easier click on
            🤏
            <Link to={`${window.location.origin}/httpRequests/axios`}>
              Axios
            </Link>{' '}
            to see how!
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Fetch
