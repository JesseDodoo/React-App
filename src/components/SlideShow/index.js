import React, { useState, useEffect} from 'react';
import images from './images.json'

export const SlideShow = ({albums, songs}) => {

    const [index, setIndex] = useState(0)

    useEffect(() => {
        setIndex(0)
    }, [])

    const next = () => {
        if (index === images.length - 1) {
          setIndex(0)
        } else {
          setIndex(index + 1)
        }
      }
      const prev = () => {
        if (index === 0) {
          setIndex(images.length - 1)
        } else {
          setIndex(index - 1)
        }
      }

      const songForAlbum = songs.map(s => {

        if (albums[index].rank === s.rank){
          console.log('match!')
          return `${s.song } `
        } else  {
          return false
        }

      })



  return (

        <div className="slideshow">
          <img className="Imgs" src={`${window.location.protocol}//${window.location.host}${images[index].image}`} />
            <h1>{`${albums[index].rank}. `}{`"${albums[index].album}"`}</h1>
            <p>Standout Songs: {songForAlbum}</p>
          <div className="actions">
            <button onClick={prev}>👈</button>
            <button onClick={next}>👉</button>
          </div>
        </div>
      
  )
}



