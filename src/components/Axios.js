import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

import axios from 'axios'

const Axios = ({ sp }) => {
  const [pokeList, setPokeList] = useState([])
  const [form, setForm] = useState({ axios: '', async: '', await: '', url: '' })

  const showPoke = async () => {
    if (
      form.axios === 'axios' &&
      form.async === 'async' &&
      form.await === 'await' &&
      form.url === 'url'
    ) {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=40&limit=6`
      )
      setPokeList(data)
    } else {
      alert('wrong inputs!')
    }
  }

  const changeForm = (e) => {
    setForm((pre) => {
      return { ...pre, [e.target.name]: e.target.value.trim() }
    })
  }

  useEffect(() => {
    console.log(form)
  }, [form])

  return (
    <div className='start'>
      <h1>Axios</h1>
      <section className='text'>
        <p>
          At last, we now know how to use {sp('XMLHttpRequests', 'blue')} and{' '}
          {sp('Promises', 'blue')}together in a {sp('synchronous', 'red')}{' '}
          method.
        </p>
        <p>
          {sp('Axios', 'red')} is a syntactic sugar for the{' '}
          {sp('fetch', 'blue')} method, if you research {sp('Axios', 'red')} in
          the following sources.
        </p>
        <p>
          <a href='https://axios-http.com/docs/intro' target='#'>
            https://axios-http.com/docs/intro
          </a>
        </p>
        <p>
          <a href='https://www.npmjs.com/package/axios' target='#'>
            https://www.npmjs.com/package/axios
          </a>
        </p>
        <p>
          <a href='https://docs.nestjs.com/techniques/http-module' target='#'>
            https://docs.nestjs.com/techniques/http-module
          </a>
        </p>

        <p>
          To solve the exercise, fill in the inputs with the right answers, and
          then click the Pokémons button.
        </p>
        <p>GOOD LUCK 🍀</p>
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
            <div>
              {sp('fill in the inputs with the following options:', 'black')}
            </div>
            {sp('url', 'white')}
            {sp('await', 'red')}
            {sp('axios', 'blue')}
            {sp('async', 'red')}
          </div>
          <div className='func-container'>
            {sp('import', 'red')} axios {sp('from', 'red')} {'"'}
            {
              <input
                style={{
                  color: 'blue',
                }}
                type='text'
                name='axios'
                value={form.axios}
                onChange={changeForm}
              />
            }
            {'"'}
            <br />
            <br />
            {sp('const', 'red')}
            {sp('fetchPoke')}=
            {
              <input
                style={{
                  color: 'red',
                }}
                type='text'
                name='async'
                value={form.async}
                onChange={changeForm}
              />
            }
            {'(url) => {'}
            <pre>
              {'  '}
              {sp('try', 'blue')} {'{'}
              <br />
              {'     '}
              {sp('const', 'blue')}
              {sp('response')}
              {'='}
              {
                <input
                  style={{
                    color: 'red',
                    maxWidth: '70px',
                    background: 'rgb(141, 141, 139)',
                  }}
                  type='text'
                  name='await'
                  value={form.await}
                  onChange={changeForm}
                />
              }
              {sp('axios', 'blue')}.{sp('get')}
              {'('}
              {
                <input
                  style={{
                    color: 'white',
                    maxWidth: '70px',
                    background: 'rgb(141, 141, 139)',
                  }}
                  type='text'
                  name='url'
                  value={form.url}
                  onChange={changeForm}
                />
              }
              {')'}
              <br />
              {'      '}
              {sp('console', 'blue')}.{sp('log')}
              {'('}
              {sp('response')}
              {')'}
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
              <br /> {'}'}
              <br />
              <br />
              {sp('fetchPoke')}
              (`https://pokeapi.co/api/v2/pokemon?offset=40&limit=6`)
            </pre>
          </div>
        </pre>
      </div>
    </div>
  )
}

export default Axios
