import React from 'react'

export default function GifList({gifs}) {
  
  return (
    <div>
      <h1>Gifs</h1>
      <ul>
        {
          gifs.map((gif) => (
            <li key={gif.id}>
              <img src={gif.images.original.url} alt='loading'></img>
            </li>
          ))
        }
      </ul>
    </div>
  )
}