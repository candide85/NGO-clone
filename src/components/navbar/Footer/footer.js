import React from 'react';
import './footer.css'
import photo3 from '../../../images/logo1.png'

function Footer(props) {
    return (
        <div className='footer-content'>
            <div></div>
            <div className='main-part'>
                <div className='part1'>
                <img src={photo3} alt='image1' height={60} width={60}/>
                <hr />
                </div>
                    <div className='part2'>
                        <ul className='navbar-item'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Project</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                <div className='part3'></div>
            </div>
        </div>
    );
}

export default Footer;
