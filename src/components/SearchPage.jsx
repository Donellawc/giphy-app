import React, {useState, createContext} from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../context/SearchContex";

function SearchPage() {


    const navigate = useNavigate ();
    const [searchResults, setSearchresults] = useState(null);
    const [rating, setRating] = useState(null);

  
    return (
     <form>
        <label htmlFor="search-bar">Search</label>
        <input 
        value={searchResults}
        
    

        type="search"
         name="" 
         id="search-bar" 
         />
<button
    type="submit"
    onClick={ ()=> {

    }

    }
    >

</button>
     </form>
  )
}

export default SearchPage;
