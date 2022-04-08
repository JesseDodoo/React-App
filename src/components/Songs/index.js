import React from "react";

export const Songs = ({songs}) => {


 const renderTopSongs = songs.map((song, index )=> <li role="listitem" key={index}> {song.song} </li>)


    return (
        <>
        <h1 role="header">Songs</h1>
        <ul>{renderTopSongs}</ul>
        </>
    )
}

