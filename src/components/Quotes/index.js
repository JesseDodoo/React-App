import React, {useState, useEffect}from 'react';
import axios from 'axios';

export const Quotes = () => {
    const [kanyeQuote, setKanyeQuote] = useState([])

    const getQuotes = async () => {
        try {
            let {data, error} = await axios.get('https://api.kanye.rest/')
            setKanyeQuote(data)
        }catch (e) {
            console.warn(e.message)
        }
    }

    useEffect(()=> {
        getQuotes()
        let int = setInterval(getQuotes, 5000)
        return () => { clearInterval(int) }
    },[])


  return (
      <>
      <div role="quotes" className='Quotes'>
          <h1>A great Kanye once said:</h1>
          <p>{`"${kanyeQuote.quote}"`}</p>
      </div>
      </>
  )
}

