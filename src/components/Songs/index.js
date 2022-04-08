import React from "react";

export const Songs = ({songs}) => {


 const renderTopSongs = songs.map((song, index )=> <li role="listitem" key={index}> {song.song} </li>)


    return (
        <>
        <h1 role="Songs1">Songs</h1>
        <ul>{renderTopSongs}</ul>
        </>
    )
}

