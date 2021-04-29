//import react libraries
import React, { useEffect } from 'react'

//import images
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';

//import AOS animation
import AOS from 'aos';
import 'aos/dist/aos.css';

//import images
import aboutThink from '../images/aboutThink.jpg';

const AboutSection = () => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <section className='container-flex'>
            <div className='content-container'>
                <img data-aos="fade-right" className='about-image' src={aboutThink} alt="about" />
                <p className='about-me-paragraph' data-aos="fade-left">
                    As-salamu alaykum <br /><br />
                    My name is humza kakar welcome to my
                    Weather webiste where I put my skills
                    to test by creating full fledge REACT JS
                    website. And linking to <a href="https://rapidapi.com/weatherapi/api/weatherapi-com?endpoint=apiendpoint_02481648-7c41-48cc-9b9f-e53596d38bab">WeatherAPI.com</a>
                     for data below are my expertise used in this project ;)
                    <ol className='expertise-panel'>
                        <li>ES6</li>
                        <li>HTML 5</li>
                        <li>CSS</li>
                        <li>SASS</li>
                        <li>VANILLA JAVASCRIPT</li>
                        <li>REACT JS</li>
                        <li>AOS ANIMATION</li>
                        <li>REACT ROUTER</li>
                        <li>HTTPS API REQUEST</li>
                        <li>ASYNCHRONOUS PROGRAMMING</li>
                    </ol>
                </p>
            </div>
        </section>
    )
}


{/* <article className='footer' data-aos="fade-left">
                    <div className='footer-icons-container'>
                        <img src={github} alt="github-icon" />
                        <img src={facebook} alt="facebook-icon" />
                        <img src={instagram} alt="instagram-icon" />
                    </div>
                    <div className='footer-links-container'>
                        <a href="https://github.com/humza-kakar-DEV/todo-app-web-application">humza-kakar-DEV</a>
                        <a href="https://www.facebook.com/profile.php?id=100017716320437">Humza Kakar</a>
                        <a href="https://www.instagram.com/legend_kakar/">legend_kakar</a>
                    </div>
                </article> */}

export default AboutSection