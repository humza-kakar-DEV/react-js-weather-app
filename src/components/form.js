//REACT LIBRARIES
import React, { useState, useEffect, useContext, createContext } from 'react'

//AOS ANIMATIONS
import AOS from 'aos';
import 'aos/dist/aos.css';

const Form = ({ refresh }) => {

    useEffect(() => {
        AOS.init();
    }, []);

    const [formValues, setFormValues] = useState(
        {
            city: ''
        }
    );

    const [formData, setFormData] = useState([]);

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
            setFormData(newFormData);
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

export default Form;
