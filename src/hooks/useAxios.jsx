import React, { useState, useEffect } from "react";
import  axios  from "axios";


const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=FNjv7NV5aauCcH2UnwD07V2AXHPpy1xA&limit=50&offset=0&lang=en";

function  useAxios (url) {        
          
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!url){
            return
        }
    async function init() {        
        setLoading(true);
        setError(null);
        setData();

        try {
        const response = await axios.get(baseUrl + url);
            setData(response.data.data.map( gif =>({
                title: gif.title,
                url: gif.images.original.url,
                gif_id: gif.id 
            })))             

        } catch(e) {

            setError(e);

        } finally {
            setLoading(false);
        }
    }
    init();

   },[url]);
        
    return { data, error,loading };
}

export default useAxios