import React, { useState, useEffect} from 'react';
import images from './images.json'

export const SlideShow = ({albums, songs}) => {

    const [index, setIndex] = useState(0)

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
          return `${s.song } `
        } else  {
          return false
        }

      })



  return (

        <div id="slideshow" className="slideshow">
          <img className="Imgs"  src={`${window.location.protocol}//${window.location.host}${images[index].image}`} />
            <h1>{`${albums[index].rank}. `}{`"${albums[index].album}"`}</h1>
            <p role="img">Standout Songs: {songForAlbum}</p>
          <div className="actions">
            <button aria-label="prevAlbum" onClick={prev}>👈</button>
            <button aria-label="nextAlbum" onClick={next}>👉</button>
          </div>
        </div>
      
  )
}



