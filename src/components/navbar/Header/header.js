import React from 'react';
import './header.css'
import logo from '../../../images/logo1.png'

function Header(props) {
    return (
        <div className='header-content'>
            <img src={logo} alt='' className='logo' style={{width:150, height:100, padding: 10}} />
            <ul className='navbar-item'>
                <li>Home</li>
                <li>About</li>
                <li>Project</li>
                <li>Contact</li>
            </ul>
            <div className='search-box'>
                <input type='text' placeholder='Search' />
                <img src='' alt='' />
            </div>
        </div>
    );
}

export default Header;