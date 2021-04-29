//import react libraries
import React from 'react'
import { Link } from 'react-router-dom';

//import images
import appLogo from '../images/appLogo.png';

const Header = () => {
    return (
        <header className='flex-header'>
            <Content />
            <Navigation />
        </header>
    )
}

const Content = () => {
    return (
        <div className='app-content'>
            <img className='app-content-logo' src={appLogo} alt="logo" />
            <h1 className='app-content-heading'>Weather</h1>
        </div>
    );
}

const Navigation = () => {
    return (
        <nav className='nav'>
            <ul className='nav-links'>
                <li><Link className='links-1' to='/'>Home</Link></li>
                <li><Link className='links-2' to='/About'>About</Link></li>
                <li><Link className='links-3' to='/Credits'>Credits</Link></li>
            </ul>
        </nav>
    );
}

export default Header
