import React from 'react'


export default function Gifs({ gif }) {
    return (
        <a href={`/Gif/${gif.id}`}>
            <img style={{ height: "100%", widht: "100%" }} alt={gif.title} src={gif.images.preview_gif.url} />
        </a>
    )
}