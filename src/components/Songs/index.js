import React from "react";

export const Songs = ({songs}) => {

    console.log(songs)

 const renderTopSongs = () =>  songs.map((song, index )=> <li key={index}> {song.song} </li>)


    return (
        <>
        <h1>Songs</h1>
        <ul>{renderTopSongs()}</ul>
        </>
    )
}

