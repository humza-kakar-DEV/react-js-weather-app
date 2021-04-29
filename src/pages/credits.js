import React from 'react'

//import images
import facebook from '../images/facebook.png';
import instagram from '../images/instagram.png';
import github from '../images/github.png';

const Credits = () => {
    return (
        <section>
            <h1 data-placeholder="CREATED BY @HUMZA KAKAR" className='credits-information'>CREATED BY @HUMZA KAKAR</h1>
            <article className='footer' data-aos="fade-left">
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
            </article>
        </section>
    )
}

export default Credits
