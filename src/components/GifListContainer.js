import React, {useEffect,useState} from 'react'
import GifList from './GifList'
import GifSearch from './GifSearch'
import '../App.css'

export default function GifListContainer() {
   const [gifs, setGifs] =useState([])
   const [searchQuery, setSearchQuery] = useState('dolphine')
   useEffect(()=>{
      const api_key = 'Hkra3vy86t0w783Elipt9InMPj76T8JL'
      
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${api_key}`)
      .then(res => res.json())
      .then(r  => {
         const first3Gifs = r.data.slice(0,3)
         setGifs(first3Gifs)
      })
     }, [searchQuery])
    
     function handleSearch(newQuery){
      setSearchQuery(newQuery)
     }
   
  return (
    <div id='giflistcontainer'>
      <GifList gifs={gifs}/>
      <GifSearch onSearch = {handleSearch}/>
    </div>
  )
}