import React, { useState } from "react";

export const Albums = ({albums}) => {
    
 console.log(albums)


 const renderTopAlbums = () =>  albums.map((album, index ) => <li key={index}> {album.rank} {album.album}</li>)


    return (
        <>
            <h1>Album </h1>
            <ul>{renderTopAlbums()}</ul>

        </>
    )
}
