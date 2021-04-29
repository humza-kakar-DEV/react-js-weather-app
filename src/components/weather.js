//import react libraries
import React, { useState, useEffect, useContext, createContext } from 'react'

//import components
import WeatherReport from './weatherReport';
import refreshImage from '../images/refresh.png';

//import AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

const Weather = () => {

    const [refreshState, setRefreshState] = useState(false);

    const [formData, setFormData] = useState([]);

    if (refreshState) {
        return (
            <section className='content'>
                <WeatherReport value={formData} />
                <RefreshButton refresh={setRefreshState} />
            </section>
        )
    } else {
        return (
            <section className='content'>
                <Form refresh={setRefreshState} value={setFormData} />
            </section>
        )
    }
}


//REFRESH BUTTON
const RefreshButton = ({ refresh }) => {
    useEffect(() => {
        AOS.init();
    }, []);
    const handleRefresh = () => {
        refresh(false);
    }
    return (
        <div data-aos="fade-left" onClick={handleRefresh} className='refresh-container'>
            <img className='refresh-icon' src={refreshImage} alt="refresh-icon" />
        </div>
    );
}


//FORM COMPONENT
const Form = ({ refresh, value }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [formValues, setFormValues] = useState(
        {
            city: ''
        }
    );

    const onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setFormValues({ ...formValues, [name]: value });
    }

    const submit = (e) => {
        e.preventDefault();
        const { city } = formValues;
        if (city) {
            const newFormData = { city };
            value(newFormData);
            setFormValues({ city: '' });
            refresh(true);
        } else {
            console.log('enter values');
        }
    }

    // data - aos - duration="1100"

    return (
        <form className='form-control' data-aos="fade-left"  >
            <h2 className='form-heading'>SEARCH</h2>
            <div className='form-control-container-1'>
                <label className='form-control-label-1' htmlFor="city">1</label>
                <input
                    className='country-input'
                    id='city'
                    type="text"
                    name='city'
                    placeholder='City'
                    value={formValues.city}
                    onChange={(e) => onChange(e)}
                />
            </div>

            <button className='submit-button' type='submit' onClick={(e) => submit(e)}>SUBMIT</button>
        </form>
    )
}

export default Weather;
