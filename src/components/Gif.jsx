import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function Gif() {
    let { postSlug } = useParams();

    const [singleGif, setSingleGif] = useState(false);

    const baseUrl = "https://api.giphy.com/v1/gifs";



    useEffect(() => {
        const search = async () => {
            try {
                const returnedData = await fetch(
                    `${baseUrl}/${postSlug}?api_key=${process.env.API_KEY}`
                );
                const data = await returnedData.json();
                setSingleGif(data.data);
            } catch (err) {
                console.log(err);
            }
        };
        search()
    }, [])

    if (singleGif === false) {
        return (
            <h1>Loading</h1>
        )
    }

    return (

        <div className="App">
            {console.log(singleGif)}
            <h1>{singleGif.title}</h1>
            <img src={singleGif.images.preview_gif.url} />

        </div>


    );
}