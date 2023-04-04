import { Link } from 'react-router-dom'
import { useState } from 'react'

const XMLHttpRequests = ({ sp }) => {
  const [pokeList, setPokeList] = useState([])

  const makeRequest = () => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon?offset=40&limit=6')
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response)
        } else {
          reject(xhr.statusText)
        }
      }
      xhr.onerror = () => {
        reject(xhr.statusText)
      }
      xhr.send()
    })
  }

  const showPoke = () => {
    makeRequest()
      .then((response) => {
        setPokeList(JSON.parse(response))
        console.log(JSON.parse(response))
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className='start'>
      <h1>XMLHttpRequest</h1>
      <section className='text'>
        <p>
          {sp('XMLHttpRequest', 'blue')} or XHR objects are used to interact
          with servers. You can retrieve data from a URL without having to do a
          full page refresh. This enables a Web page to update just part of a
          page without disrupting what the user is doing.
        </p>
        <p>
          Despite its name, {sp('XMLHttpRequest', 'blue')} can be used to
          retrieve any type of data, not just XML.
        </p>
        <p>
          Now we can use both {sp('XMLHttpRequest', 'blue')} to {sp('fetch')}{' '}
          the data, and the {sp('Promise', 'blue')} constructor to{' '}
          {sp('asynchronous')} processing of the data.
        </p>
        <p>
          This way we can avoid all the previous "bus train problems" such as
          callbacks, threading, and synchronous.
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
            <br />
            <pre>
              {'  '}
              {sp('return', 'red')}
              {sp('new', 'red')}
              {sp('Promise', 'blue')}((resolve, reject) {'=>'} {'{'}
              <br />
              {'    '}
              {sp('const', 'red')} {sp('xhr')} = {sp('new', 'red')}{' '}
              {sp('XMLHttpRequest', 'blue')}
              {'()'}
              <br />
              {'      '}
              {sp('xhr')}.{sp('open')}('GET', url)
              <br />
              {'      '}
              {sp('xhr')}.{sp('onload')}= {'() => {'}
              <br />
              {'        '}
              {sp('if', 'red')}({sp('xhr')}.{sp('status', 'blue')}
              {sp('>=', 'red')}
              {sp('200', 'blue')}
              {sp('&&', 'red')}
              {sp('xhr')}.{sp('status', 'blue')}
              {sp('<', 'red')}
              {sp('300', 'blue')})
              <br />
              {'              '}
              {sp('resolve')}({sp('xhr')}.{sp('response', 'blue')})
              <br />
              {'            '}
              {'}'}
              {sp('else', 'red')}
              {'{'}
              <br />
              {'              '}
              {sp('reject')}({sp('xhr')}.{sp('statusText', 'blue')})
              <br />
              {'            '}
              {'}'}
              <br />
              {'      '}
              <br />
              {'          '}
              {'}'}
              <br />
              {'       '}
              {sp('xhr')}.{sp('onerror')}= {'() => {'}
              <br />
              {'              '}
              {sp('reject')}({sp('xhr')}.{sp('statusText', 'blue')})
              <br />
              {'        '}
              {'}'}
              <br />
              {'    '}
              <br />
              {'       '}
              {sp('xhr')}.{sp('send')}()
              <br />
              {'    '}
              {'}'}
              <br /> {'}'}
            </pre>
          </div>
          <div className='func-container'>
            {sp('fetchPoke')}
            (`https://pokeapi.co/api/v2/pokemon?offset=40&limit=6`)
            <br />
            <pre>
              {'    '}.{sp('then')}
              {'((response) => {'}
              <br />
              {'      '}
              {sp('console', 'blue')}.{sp('log')}
              {'('}
              {sp('JSON', 'blue')}.{sp('parse')}
              {'(response))'}
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
            </pre>
          </div>
        </pre>
        <ol className='inst-list'>
          <li>
            by clicking on 🤏 {sp('Pokémons')} Button you'll call{' '}
            {sp('fetchPoke')} function.
          </li>
          <li>
            {sp('fetchPoke')} will first create the
            {sp('Promise', 'blue')} Class, the {sp('Promise', 'blue')} cna then
            make a request to the server by using {sp('XMLHttpRequest', 'blue')}{' '}
            and finally {sp('if', 'red')} the data is fulfilled 🤞 we can use{' '}
            {sp('resolve')} parameter form the {sp('Promise', 'blue')} to give
            us the data from the request.{sp('else', 'red')}we will get an error
            throw the {sp('reject')}parameter form the {sp('Promise', 'blue')}
          </li>
          <li>
            as we did before in parameter form the {sp('Promises', 'blue')} we
            can use {sp('then')} and {sp('catch')} to {sp('GET')} the final
            result from this request.
          </li>
          <li>
            {sp('XMLHttpRequest', 'blue')} contains many functions that can help
            us to handle data on servers.
          </li>
          <li>
            {sp('XMLHttpRequest', 'blue')} contains many more interesting
            functions such as {sp('open')},{sp('onload')},{sp('send')}and{' '}
            {sp('onerror')} those functions enable us to have better control and
            access over our request.
          </li>
          <li>
            {sp('XMLHttpRequest', 'blue')} is not only used to {sp('GET')} the
            data but also {sp('POST')}, {sp('PUT')},{sp('DELETE')}, and much
            more.
          </li>
          <li>
            Since our main focus is {sp('asynchronous', 'blue')} programming
            we're not going to go in all details of{' '}
            {sp('XMLHttpRequest', 'blue')}
          </li>
          <li>
            Now what is the problem? simply syntax, it takes too much coding
            just to make a simple {sp('GET')} request click on 🤏
            <Link to={`${window.location.origin}/httpRequests/fetch`}>
              Fetch
            </Link>{' '}
            to solve this problem!
          </li>
        </ol>
      </div>
    </div>
  )
}

export default XMLHttpRequests
