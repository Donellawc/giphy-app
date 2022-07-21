import React, { useState, useEffect } from "react";
import  axios  from "axios";


const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=FNjv7NV5aauCcH2UnwD07V2AXHPpy1xA&limit=100&offset=0&lang=en&rating=";

function  useAxios (url) {        
          
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    async function init() {        
        setLoading(true);
        setError(null);
        setData();

        try {
        const response = await axios.get(baseUrl + url);
            setData(response.data)

        } catch(e) {

            setError(e);

        } finally {
            setLoading(false);
        }
    }
    init();

   },[url])
        
    return { data, error,loading };
}

export default useAxios