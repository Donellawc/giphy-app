import React, { useState, useEffect } from "react";
import  Axios  from "axios";



function  useAxios (url) {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const baseUrl = "https://api.giphy.com/v1/gifs/search?api_key=FNjv7NV5aauCcH2UnwD07V2AXHPpy1xA&limit=100&offset=0&lang=en&rating=";


    return (

    )
}
export default useAxios