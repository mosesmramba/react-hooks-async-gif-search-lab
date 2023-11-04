import React, {useState} from 'react'
import '../App.css'

export default function GifSearch({onSearch}) {
  const [newQuery, setNewQuery] = useState("")

  function handleSubmit(e){
    e.preventDefault()
    onSearch(newQuery)
    setNewQuery("")
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Enter a Search Term:</label><br/>
        <input type='text' 
        onChange={(e) => setNewQuery(e.target.value)}
         /><br/>
         <button
         id="button"
         type='submit'
         >Find Gifs</button>
      </form>
    </div>
  )
}