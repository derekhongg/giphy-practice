import React from "react";
import { useState, useEffect } from "react";
import Gifs from "./Gifs";
export default function Home() {
    // setup the usestates to hold the data for trending and serach results
    const [trendingGifs, setTrendingGifs] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchWord, setSearchWord] = useState("");

    // api.giphy.com/v1/gifs/trending base url
    // function to reach endpoint and return data

    const baseUrl = "https://api.giphy.com/v1/gifs";

    const trending = async () => {
        // grab trending gifs at inital page load
        try {
            const response = await fetch(
                `${baseUrl}/trending?api_key=${process.env.API_KEY}&limit=10`
            );
            const data = await response.json();
            console.log(data);
            return data;
        } catch (err) {
            console.log(err);
        }
    };

    const search = async (searchQuery) => {
        try {
            const returnedData = await fetch(
                `${baseUrl}/search?api_key=${process.env.API_KEY}&q=${searchQuery}&limit=10`
            );
            const data = await returnedData.json();
            console.log(data, "search data");
            setSearchResults(data.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        const retrieveData = async () => {
            try {
                const returnedTrendingData = await trending();
                setTrendingGifs(returnedTrendingData.data);
            } catch (err) {
                console.log(err);
            }
        };
        retrieveData();
    }, []);
    return (
        <div className="App">
            <h1>Giphy Copy</h1>
            {/* section for the search bar */}
            <div className="search">
                <input
                    value={searchWord}
                    onChange={(e) => setSearchWord(e.target.value)}
                />
                <button onClick={() => search(searchWord)}>Search</button>
            </div>
            {/* section for trending gifs */}
            <div className="trending">
                <h3>Trending</h3>
                <div>
                    {trendingGifs.map((gif) => {
                        return <Gifs gif={gif} />;
                    })}
                </div>
            </div>

            {/* section for the search results */}

            <div className="results">
                <h3>Results</h3>
                {searchResults.map((gif) => {
                    return <Gifs gif={gif} />;
                })}
            </div>
        </div>
    );
}