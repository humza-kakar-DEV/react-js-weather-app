//import react libraries
import React, { useState, useEffect } from 'react'

//import components
import useApi from '../adapters/useApi';

//import images
import loading_icon from '../images/refresh.png';

const WeatherReport = ({ value }) => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);


    const weatherApi = async (city = 'Karachi') => {
        const URL = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=1&rapidapi-key=1359526083mshae3e2d0355f0dc1p1f3e85jsn1b9eba51af66`;
        try {
            const response = await fetch(URL);
            const json = await response.json();
            setWeatherData(json);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        weatherApi(value.city);
    }, []);

    if (loading) {
        return (
            <div className='loading-container'>
                <h1 className='loading-heading'> LOADING</h1>
                <img className='loading-icon' src={loading_icon} alt="loading-icon" />
            </div>
        )
    } else {

        const { day: { avgtemp_c, condition: { text, icon } } } = weatherData.forecast.forecastday[0];

        return (
            <div className='report'>
                <h1 className='report-heading'>{value.city}</h1>
                <h3 className='report-weather-type'>{text}</h3>
                <img className="report-weather-image" src={icon} alt="weather-image" />
                <h1 className='report-temperature'>{avgtemp_c}°</h1>
            </div>
        )
    }
}

export default WeatherReport