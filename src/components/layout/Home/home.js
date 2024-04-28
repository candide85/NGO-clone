import React from 'react';
import './home.css'
import photo1 from '../../../images/fif.png'
import photo3 from '../../../images/pb.png'

function Home(props) {
    return (
        <div className='container'>

            <div className='home-content'>
                    <h1>L'ENVIRONEMENT C'EST LA VIE</h1>
                <div className='home-content1'>
                    <img src={photo1} alt='image1' height={750} width={400}/>
                </div>
                <div className='home-content2'>
                    <img src={photo3} alt='image1' height={300} width={400}/>
                </div>
            </div>

        </div>
    );
}

export default Home;