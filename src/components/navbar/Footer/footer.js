import React from 'react';
import './footer.css'
import photo3 from '../../../images/logo1.png'
import facebook from '../../../images/face.png'
import instagram from '../../../images/inst.png'
import whatsapp from '../../../images/wsp.png'

function Footer(props) {
    return (
        <div className='footer-content'>
            <div className='sociaux-link'>
                <a><img src={facebook} alt='facebook' height={30} width={30} /></a>
                <a><img src={instagram} alt='instagram' height={30} width={30} /></a>
                <a><img src={whatsapp} alt='whatsapp' height={30} width={30} /></a>
            </div>
            <div className='main-part'>
                <div className='part1'>
                    <img src={photo3} alt='image1' height={60} width={60}/>
                <hr />
                </div>
                    {/* <div className='part2'>
                        <ul className='navbar-item'>
                            <li>Home</li>
                            <li>About</li>
                            <li>Project</li>
                            <li>Contact</li>
                        </ul>
                    </div> */}
                <div className='part3'></div>
            </div>
        </div>
    );
}

export default Footer;
