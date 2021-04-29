import React, { useEffect, useState } from 'react'

const useApi = (city = 'Karachi') => {

    const [data, setData] = useState([]);

    const KEY = '1359526083mshae3e2d0355f0dc1p1f3e85jsn1b9eba51af66';
    const URL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=Karachi&days=1&rapidapi-key=1359526083mshae3e2d0355f0dc1p1f3e85jsn1b9eba51af66`;


    const fetchApi = async () => {
        const response = await fetch(URL);
        const json = await response.json();
        setData(json);
    }

    useEffect(() => {
        fetchApi();
    }, []);

    return { data };
}

export default useApi
