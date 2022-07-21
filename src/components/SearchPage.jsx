import React, { useState, createContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContex";

function SearchPage() {


    const navigate = useNavigate();
    const [searchResults, setSearchresults] = useState([]);
    const [rating, setRating] = useState();
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    return (
        <form>
            <label htmlFor="search-bar">Search</label>
            <input
                value={searchResults}
                onChange={(e) => {}}
                type="search"
                name="searchBar"
                id="search-bar"
            />
            <button
                type="submit"
                onClick={(e) => {}}>
                    Submit
            </button>
        </form>
    )
}

export default SearchPage;
