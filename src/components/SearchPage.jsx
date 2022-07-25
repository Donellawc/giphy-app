import React, { useState, createContext, useContext, useMemo, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContext";
import { FavoritesContext } from "../context/FavoritesContext";
// import axios from "axios";
import useAxios from "../hooks/useAxios";
import GifDisplay from "./GifDisplay";
import { FaHeart } from 'react-icons/fa';


function SearchPage() {


    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const { searchResults, setSearchResults } = useContext(SearchContext);
    const [rating, setRating] = useState();
    const { favorites, add, remove } = useContext(FavoritesContext);
    const [url, setUrl] = useState("");
    const [query, setQuery] = useState("");
    const { data, gifs, error } = useAxios(url);
    const favIDs = useMemo(
        () => favorites.map((val) => val.gif_id),
        [favorites]
    );
    useEffect(() => {
        if (gifs) {
            setSearchResults(gifs);
        }
    }, [gifs, setSearchResults]);





    return (
        <>
            <form>
                <label htmlFor="search-bar">Search</label>
                <input
                    value={searchResults}
                    onChange={(e) => {
                        setSearchResults(e.target.value);
                    }}
                    type="search"
                    name="searchBar"
                    id="search-bar"
                />
                <label htmlFor="rating-dropdown"></label>
                <select
                    name="rating"
                    id="rating-dropdown"
                    value={rating}
                    onChange={(e) => {
                        setRating(e.target.value);
                    }}
                >

                    <option value="g">G</option>
                    <option value="pg">PG</option>
                    <option value="pg">PG-13</option>
                    <option value="r">R</option>
                </select>
                <button
                    type="submit"
                    onClick={(e) => {
                        e.preventDefault();
                        // for rating 
                        setUrl(`&q=${searchResults}&rating=${rating}`);
                    }}

                >
                    Submit
                </button>
                {console.log(data)}

            </form>
            <div className="d-flex flex flex-wrap justify-content-center">
                <h1 className="my-4 col-12 text-center">Gif Search</h1>
                
                {data && data.map((data, idx) => (

                    <div key={idx}>
                        <img
                            onClick={(data) => (data)}
                            src={data.url}
                            alt={data.title}
                        />
                        <span className="favorite-icon"><FaHeart /></span>
                    </div>
                ))}
            </div>
        </>

    )
}

export default SearchPage;
