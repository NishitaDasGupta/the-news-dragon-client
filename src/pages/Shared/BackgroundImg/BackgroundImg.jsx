import React from 'react';
import './BackgroundImg.css'
import background from '../../../assets/bg.png'
import { Button } from 'react-bootstrap';
const BackgroundImg = () => {
    return (
        <div>
            <article
                className='backgroundstyles py-5 px-3'
                style={{ backgroundImage: `url(${background})` }}
            >
                <h1 className='backgroundheader mb-4'>Create an Amazing Newspaper</h1>
                <p className='background-description' >Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button className='mt-4 mb-2' variant="danger">Learn More</Button>
            </article>
        </div>
    );
};

export default BackgroundImg;